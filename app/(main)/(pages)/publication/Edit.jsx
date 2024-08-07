import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [publication, setPublication] = useState({
    title: "",
    description: "",
    asset: null,
  });

  let collectionId = conf.collections.publication;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setPublication(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const addPublication = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .createData(collectionId, publication)
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const updatePublication = async (e) => {
    e.preventDefault();
    if (publication.asset == "") {
      publication.asset = null;
    }
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          title: publication.title,
          description: publication.description,
          asset: publication.asset,
        })
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => {
    setVisibilty("hidden");
    window.location.reload();
  };

  return (
    //  Create a card for adding latest news
    <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Publication Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updatePublication : addPublication}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={publication.title}
                    onChange={(e) =>
                      setPublication((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Title"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={publication.description}
                    onChange={(e) =>
                      setPublication((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Description"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="url"
                    value={publication.asset}
                    onChange={(e) =>
                      setPublication((prev) => ({
                        ...prev,
                        asset: e.target.value,
                      }))
                    }
                    placeholder="If you want to add a link to the publication, add it here."
                  />
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updatePublication}>Update</button>
                    ) : (
                      <button onClick={addPublication}>Add</button>
                    )}
                  </Button>
                  <Button>
                    <button onClick={handleClose}>Close</button>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Edit;
