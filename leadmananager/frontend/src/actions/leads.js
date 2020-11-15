import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import { createMessage } from './messages';

//Get Leads

export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err))
};

//DELETE Leads

export const deleteLeads = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteLead: "Lead delete" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        }).catch(err => console.log(err))
};

//ADD_LEAD Leads

export const addLead = (lead) => dispatch => {
    axios.post("/api/leads/", lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        }).catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: error
            })
        })
};