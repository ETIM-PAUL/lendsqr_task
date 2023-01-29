export default function MkdSDK(this: any) {

  this._baseurl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api";

  this.getUsers = async function () {
    const result = await fetch(this._baseurl + "/v1/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();

    if (result.status === 401) {
      throw new Error(json.message);
    }

    if (result.status === 403) {
      throw new Error(json.message);
    }
    return json;
  };

  this.getUsers = async function (id: number) {
    const result = await fetch(this._baseurl + `/v1/users/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();

    if (result.status === 401) {
      throw new Error(json.message);
    }

    if (result.status === 403) {
      throw new Error(json.message);
    }
    return json;
  };
}