const mongoHelper = require('./mongo-helper')

describe('Mongo helper', () => {
  test('Should reconnect when get db is invoked and client is disconnected', async () => {
    const sut = mongoHelper
    await sut.connect(process.env.MONGO_URL)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getDb()
    expect(sut.db).toBeTruthy()
  })
})
