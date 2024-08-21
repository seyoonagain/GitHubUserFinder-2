import { Octokit } from "octokit";

export class Github {
	constructor() {
		this.octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
		this.headers = { 'X-GitHub-Api-Version': '2022-11-28' };
		this.per_page = 20
	}

	async getUser(username) {
		const params = {
			username,
			headers: this.headers
		}
		const result = await this.octokit.request('GET /users/{username}', params)
			.then(res => res.data)
			.catch(error => error.status)

		return result
	}

	async fetchData(type, username, page) {
		const params = {
			username, page,
			per_page: this.per_page,
			headers: this.headers,
		}
		if (type === 'repos') {
			params.sort = 'updated'
		}
		const result = await this.octokit.request(`GET /users/{username}/${type}`, params)
			.then(res => res.data)
			.catch(error => error.status)

		return result
	}
}