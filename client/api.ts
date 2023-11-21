import request from 'superagent'
import { Fruit, NewFruit } from '../models/fruit.ts'

const rootUrl = '/api/v1'

export async function getFruits(): Promise<Fruit[]> {
  //  request
  //     .get(`${rootUrl}/fruits`)
  //     .then((res) => res.body.fruits)
  //     .catch(logError)
  try {
    const result = await request.get(`${rootUrl}/fruits`)
    return result.body.fruits
  } catch (error) {
    console.error(error)
    throw logError(error)
  }
}

export async function addFruit(
  fruit: NewFruit,
  token: string
): Promise<Fruit[]> {
  // return request
  //   .post(`${rootUrl}/fruits`)
  //   .set('Authorization', `Bearer ${token}`)
  //   .send({ fruit })
  //   .then((res) => res.body.fruits)
  //   .catch(logError)

  try {
    const result = await request
      .post(`${rootUrl}/fruits`)
      .set('Authorization', `Bearer ${token}`)
      .send({ fruit })
    return result.body.fruits
  } catch (error) {
    console.error(error)
    throw logError(error)
  }
}

export async function updateFruit(
  fruit: Fruit,
  token: string
): Promise<Fruit[]> {
  // return request
  //   .put(`${rootUrl}/fruits`)
  //   .set('Authorization', `Bearer ${token}`)
  //   .send({ fruit })
  //   .then((res) => res.body.fruits)
  //   .catch(logError)

  try {
    const result = await request
      .put(`${rootUrl}/fruits`)
      .set('Authorization', `Bearer ${token}`)
      .send({ fruit })
    return result.body.fruits
  } catch (error) {
    console.error(error)
    throw logError(error)
  }
}

export async function deleteFruit(id: number, token: string): Promise<Fruit[]> {
  // return request
  //   .delete(`${rootUrl}/fruits/${id}`)
  //   .set('Authorization', `Bearer ${token}`)
  //   .then((res) => res.body.fruits)
  //   .catch(logError)

  try {
    const result = await request
      .delete(`${rootUrl}/fruits/${id}`)
      .set('Authorization', `Bearer ${token}`)
    return result.body.fruits
  } catch (error) {
    throw logError(error)
  }
}

function logError(err: Error | unknown) {
  if (err.message === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
