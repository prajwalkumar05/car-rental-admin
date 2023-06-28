import { Center, Container, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from 'uuid';

const AddCars = () => {
  const [show, setShow] = useState(false);

  const [carName, setCarName] = useState("");
  const [bard, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [automatic, setAutomatic] = useState("");
  const [speed, setSpeed] = useState("");
  const [gps, setGps] = useState("");
  const [seat, setSeat] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const[carImage,setCarImage]=useState(null)

  const newCityRef = doc(collection(db, "cars"));
  
  console.log(uuid())

  const handleClick = async () => {
    console.log(
      carName,
      bard,
      model,
      price,
      automatic,
      speed,
      gps,
      seat,
      img,
      description
    );

    const imageRef = ref(storage,`images/${img.name}`);
    await uploadBytes(imageRef,img)
    const downloadUrl = await getDownloadURL(imageRef);



    console.log(carImage)
    console.log(uuid())

          

    
    setDoc(newCityRef, {
      id:uuid(),
        carName,
      bard,
      model,
      price,
      automatic,
      speed,
      gps,
      seat,
      description,
      image:downloadUrl
      
    });

    setCarName("")
  };

  return (
    <Center>
      <div className="w-[70%] shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
          Add new Cars
        </p>
        <div className="md:flex items-center mt-12">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Car Name
            </label>
            <input
             value={carName}
              onChange={(e) => setCarName(e.target.value)}
              tabIndex={0}
              arial-label="Please input name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input  name"
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
              brand
            </label>
            <input
              onChange={(e) => setBrand(e.target.value)}
              tabIndex={0}
              arial-label="Please input email address"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input email address"
            />
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              model
            </label>
            <input
              onChange={(e) => setModel(e.target.value)}
              tabIndex={0}
              role="input"
              arial-label="Please input company name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
              placeholder="Please input company name"
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
              price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input country name"
            />
          </div>
        </div>

        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              automatic
            </label>
            <input
              onChange={(e) => setAutomatic(e.target.value)}
              tabIndex={0}
              role="input"
              arial-label="Please input company name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
              placeholder="Please input company name"
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
              speed
            </label>
            <input
              onChange={(e) => setSpeed(e.target.value)}
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input country name"
            />
          </div>
        </div>

        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              gps
            </label>
            <input
              onChange={(e) => setGps(e.target.value)}
              tabIndex={0}
              role="input"
              arial-label="Please input company name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
              placeholder="Please input company name"
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">
            seatType
            </label>
            <input
              onChange={(e) => setSeat(e.target.value)}
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input country name"
            />
          </div>
        </div>

        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Image
            </label>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              tabIndex={0}
              arial-label="Please input country name"
              type="file"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input country name"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              tabIndex={0}
              aria-label="leave a message"
              role="textbox"
              type="name"
              className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              defaultValue={""}
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            onClick={handleClick}
            className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </Center>
  );
};

export default AddCars;

// id: 1,
//     brand: "Tesla",
//     rating: 112,
//     carName: "Tesla Malibu",
//     imgUrl: img01,
//     model: "Model 3",
//     price: 50,
//     speed: "20kmpl",
//     gps: "GPS Navigation",
//     seatType: "Heated seats",
//     automatic: "Automatic",
//     description:


    // const profileStorageRef = ref(storage, `profile-img/${img.name}`);
    // const profilePhotoFile = uploadBytesResumable(profileStorageRef, img);

    // profilePhotoFile.on(
    //   "state_changed",
    //   (snapshot) => {
    //     var progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     // setProgress(progress);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     getDownloadURL(profilePhotoFile.snapshot.ref).then((url) => {
    //         setCarImage(url)

            

    //     });
    //   }
    // );