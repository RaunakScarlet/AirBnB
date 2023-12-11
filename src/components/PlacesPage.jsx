
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IndexPage from './IndexPage';
const PlacesPage = () => {

    let { action } = useParams();
    
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState("");
    const [description, setDiscription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [chekin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [maxGuest, setMaxGuest] = useState(10);

    async function addPhotoByLink(e) {
        e.preventDefault();
      const {data:fileName} = await axios.post("/uploadByLink", {
            link:photoLink
      });
        setAddedPhotos((prev) => [...prev, fileName]);
        setPhotoLink('')
    }


   
  return (
      <div>
          {action !== "new" && (
              <div className="text-center">
                  <Link
                      to={"/account/places/new"}
                      className="bg-primary text-white py-2 px-6 rounded-full  text-center inline-flex gap-2"
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                          />
                      </svg>
                      Add new Places
                  </Link>
              </div>
          )}
          {action === "new" && (
              <div>
                  <form>
                      <h2 className="mt-4 text-2xl">Title</h2>
                      <p className="text-sm text-gray-500">
                          Title should be small and catchy
                      </p>
                      <input
                          type="text"
                          placeholder="title, for example My appartment"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                      />
                      <h2 className="mt-4 text-2xl">Address</h2>
                      <p className="text-sm text-gray-500">
                          Address to this place
                      </p>
                      <input
                          type="text"
                          placeholder="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                      />
                      <h2 className="mt-4 text-2xl">Photos</h2>
                      <p className="text-sm text-gray-500">
                          add more than 2 photos
                      </p>
                      <div className="flex gap-2">
                          <input
                              className=""
                              type="text"
                              placeholder="add using link"
                              value={photoLink}
                              onChange={(e) => setPhotoLink(e.target.value)}
                          />

                          <button
                              className="w-32 bg-primary text-white rounded-2xl  px-2 "
                              onClick={(e) => addPhotoByLink(e)}
                          >
                              Add photo
                          </button>
                      </div>
                      <div className="mt-2  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                          {addedPhotos.length > 0 &&
                              addedPhotos.map((photo, index) => (
                                  <div className='h-32  flex' key={index}>
                                      <img
                                          className="p-2 w-full object-cover rounded-xl"
                                          src={
                                              "http://localhost:4000/uploads/" +
                                              photo
                                          }
                                          alt={photo}
                                      />
                                  </div>
                              ))}
                         
                      </div>
                      <h2 className="mt-4 text-2xl">Description</h2>
                      <p className="text-sm text-gray-500">
                          Add details of the place
                      </p>
                      <textarea
                          value={description}
                          onChange={(e) => setDiscription(e.target.value)}
                      />
                      <h2 className="mt-4 text-2xl">Perks</h2>
                      <p className="text-sm text-gray-500">
                          select all the perks
                      </p>
                      <div className="mt-2 gap-2 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4">
                          <label className="flex gap-4 border p-4 rounded-2xl ">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                  />
                              </svg>

                              <span>Wifi</span>
                          </label>
                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                  />
                              </svg>

                              <span>Free parking</span>
                          </label>
                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                  />
                              </svg>

                              <span>Pets</span>
                          </label>

                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                                  />
                              </svg>

                              <span>TV</span>
                          </label>
                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                  />
                              </svg>

                              <span>Pool</span>
                          </label>
                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                  />
                              </svg>

                              <span>Air conditioning</span>
                          </label>

                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                                  />
                              </svg>

                              <span>Garden</span>
                          </label>
                          <label className="flex gap-4 border p-4 rounded-2xl flex">
                              <input type="checkbox" />
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                                  />
                              </svg>

                              <span>Kitchen</span>
                          </label>
                      </div>
                      <h2 className="mt-4 text-2xl">Extra Informations</h2>
                      <p className="text-sm text-gray-500">Eg. rules...</p>
                      <textarea
                          value={extraInfo}
                          onChange={(e) => setExtraInfo(e.target.value)}
                      />
                      <h2 className="mt-4 text-2xl">Check In & Out times</h2>
                      <p className="text-sm text-gray-500">
                          add check in and check out times, remember to have
                          some time for window for cleaning room between guest
                      </p>
                      <div className="gap-2 grid sm:grid-col-3">
                          <div>
                              <h3 className="mt-2 -mb-1">Check In time</h3>
                              <input
                                  type="text"
                                  value={chekin}
                                  onChange={(e) => setCheckin(e.target.value)}
                              />
                          </div>
                          <div>
                              <h3 className="mt-2 -mb-1">Check Out time</h3>
                              <input
                                  type="text"
                                  value={checkout}
                                  onChange={(e) => setCheckout(e.target.value)}
                              />
                          </div>
                          <div>
                              <h3 className="mt-2 -mb-1">Max no. of guests</h3>
                              <input
                                  type="number"
                                  value={maxGuest}
                                  onChange={(e) => setMaxGuest(e.target.value)}
                              />
                          </div>
                      </div>
                      <div>
                          <button className="primary my-4">Save</button>
                      </div>
                  </form>
              </div>
          )}
      </div>
  );
}

export default PlacesPage
