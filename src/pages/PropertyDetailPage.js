import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

import { useHistory } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";

import { GoLocation } from "react-icons/go";

import { ImPriceTags } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { NavbarComponent } from "../components/Navbar/NavbarComponet";

import {
  DescriptionComponent,
  DetailsSlider,
} from "../components/discription/DescriptionComponent";

const PropertyDetailPage = (props) => {
  let { user, logoutUser } = useContext(AuthContext);
  const history = useHistory();

  const id = props.match.params.id;

  const [propertyDetail, setPropertyDetail] = useState("");

  const [bookings, setBookings] = useState("");
  const [bookingId, setBookingId] = useState("");

  const getPropertyDetail = async () => {
    const response = await fetch(`https://api.gamkrib.com/listings/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setPropertyDetail(data);
  };

  //booking a property

  const bookProperty = async () => {
    const response = await fetch("https://api.gamkrib.com/book-create/", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user.user.pk,
        listing: id,
      }),
    });

    let data = await response.json();

    // console.log(data);
  };

  const updateSlots = async () => {
    const response = await fetch(`https://api.gamkrib.com/slot-update/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slot: propertyDetail.slot - 1,
      }),
    });
  };

  const bookAndUpdateSlot = () => {
    bookProperty();
    updateSlots();
  };

  // Processing payment.
  const paywithpaystack = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_0019a4e3acb7a9886c8c65386a5be0619de6223e",
      amount: propertyDetail.price * 100,
      email: user.user.email,
      username: user.user.username,

      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
      },

      onSuccess: () => bookAndUpdateSlot(),

      onSuccess: () => bookProperty(),

      onCancel() {
        alert("Transaction cancelled!");
      },
    });
  };

  useEffect(() => {
    getPropertyDetail();
  }, []);

  return (
    <div class="wrapper">
      {/* Navbar goes here  */}
      <NavbarComponent />
      <DescriptionComponent
        propertyDetail={propertyDetail}
        user={user}
        paywithpaystack={paywithpaystack}
      />
      <div class="row hey">
        <div class="col-sm "></div>
      </div>{" "}
      <div class="row">
        <div class="col-sm-6">
          <section class="checkout-background"></section>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailPage;
