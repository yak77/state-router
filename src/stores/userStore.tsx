export class UserStore {
	private _user = "";

	public user() {
		return this._user;
	}

	public isUserLoggedIn() {
		return this._user.length > 0;
	}

	public login() {
		this._user = "abc";
	}

	public logout() {
		this._user = "";
	}
}

export const userStore = new UserStore();
