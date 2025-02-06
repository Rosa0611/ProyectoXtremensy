import { Activity } from "../interfaces/activities.interface";

const API = 'http://localhost:3000/api';

export const createActivityRequest = (activity: Activity) =>
    fetch(`${API}/products`, {
        method: 'POST',
        body: JSON.stringify(activity),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    export const deleteActivityRequest =(id: string) =>
    fetch(`${API}/products/${id}`, {
        method: 'DELETE'
    });

    export const editActivityRequest =(id: string) =>
    fetch(`${API}/products/${id}`, {
        method: 'GET'
    });

    export const updateActivityRequest = (id: string, activity: Activity) =>
    fetch(`${API}/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(activity),
        headers: {
            'Content-Type': 'application/json'
        }
    });