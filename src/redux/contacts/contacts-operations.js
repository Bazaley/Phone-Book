import { createAsyncThunk } from '@reduxjs/toolkit';
import Parse from 'parse/dist/parse.min.js';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (id, { rejectWithValue }) => {
    const Contacts = new Parse.Query('Contacts');

    Contacts.equalTo('owner', id);

    try {
      const results = await Contacts.find();

      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, id }, { rejectWithValue }) => {
    try {
      const Contacts = new Parse.Object('Contacts');
      Contacts.set('name', name);
      Contacts.set('phone', number);
      Contacts.set('owner', id);

      const contact = await Contacts.save();
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (objectId, { rejectWithValue }) => {
    const Contact = new Parse.Object('Contacts');
    Contact.set('objectId', objectId);

    try {
      await Contact.destroy();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ objectId, name, phone }, { rejectWithValue }) => {
    const Contact = new Parse.Object('Contacts');
    Contact.set('objectId', objectId);
    Contact.set('name', name);
    Contact.set('phone', phone);
    try {
      await Contact.save();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
