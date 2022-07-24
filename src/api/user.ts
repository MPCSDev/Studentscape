import { API_URL } from ".";

export interface ProfileData {
  firebaseUID: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  email: string;
}

export async function userExists(firebaseUID: string) {
  const response = await fetch(`${API_URL}/user/exist/${firebaseUID}`);
  const { found } = await response.json();

  return found;
}

export async function userUpdate(data: ProfileData) {

  await fetch(`${API_URL}/user/`, {
    method: "PUT",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

}

export async function getProfile(firebaseUID: string) {

  const response = await fetch(`${API_URL}/user/${firebaseUID}`);
  const data = await response.json();

  return data;
}

