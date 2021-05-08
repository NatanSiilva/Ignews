import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  // Buscar o usuário no banco do FaunaDB com ID {customerId}

  // console.log('subscription:', subscriptionId)
  // console.log('customer:', customerId)

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  // Salvar os dados da subscription no FaunaDB

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  // se eu estou criando uma nova subscription salvo ela no banco.

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection("subscriptions"), { data: subscriptionData })
    );
  } else {
    // se estou atualizando uma subscription eu faço um replace, eu busco a a subscription pela REF o id e troco todos os dados salvos por novos dados .

    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index("subscription_by_id"), 
              subscriptionId
            )
          )
        ),
        { data: subscriptionData }
      )
    );
  }
}
