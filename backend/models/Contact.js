// ============================================================
// Contact Model — In-memory storage
// Replace with Mongoose schema when MongoDB is connected.
// ============================================================

const contacts = [];

export const createContact = (data) => {
  const contact = {
    id: String(contacts.length + 1),
    ...data,
    createdAt: new Date().toISOString(),
  };
  contacts.push(contact);
  return contact;
};

export const getAllContacts = () => contacts;
