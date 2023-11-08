export default class Service {
  _url = 'https://aviasales-test-api.kata.academy'
  async getSearchId() {
    const response = await fetch(`${this._url}/search`, { method: 'GET' })

    if (!response.ok) {
      throw new Error(`Could not get search id from ${this._url}. Status: ${response.status}`)
    }

    const body = await response.json()
    return body.searchId
  }

  async getTickets(searchId) {
    if (searchId) {
      const response = await fetch(`${this._url}/tickets?searchId=${searchId}`)

      if (!response.ok) {
        throw new Error(`Could not get ticket's data from ${this._url}. Status: ${response.status}`)
      }
      const body = await response.json()
      return body
    }
  }
}
