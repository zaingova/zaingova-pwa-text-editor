import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database...');

  // opens db, saves data in transaction, makes a put request to the db
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: id, content: content });
  const result = await request;

  if (result) {
    console.log('data saved to the database', result);
    return result;
  } else
    console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET ALL from the database...');

  // opens db, saves data in transaction/store, makes getAll request on db
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;

  if (result) {
    console.log('result.value', result);
    return result;
  } else
    console.error('getDb not implemented');
}

// initializes db by default
initdb();
