import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import useDelayedState from "../../hooks/useDelayedState";
import InputNameTemplate from "./../../components/templates/InputNameTemplate";
import { setAppError } from "./appErrorSlice";
import { setLocation } from "./locationSlice";
import {
  decreasePartagerStep,
  increasePartagerStep,
} from "./partagerStepSlice";

const Partager = () => {
  const dispatch = useAppDispatch();

  const partagerStep = useAppSelector((state) => state.partagerStepSlice.value);
  const delayedPartagerStep = useDelayedState(partagerStep, 500);
  const twiceDelayedPartagerStep = useDelayedState(partagerStep, 1000);

  const appError = useAppSelector((state) => state.appErrorSlice);
  const location = useAppSelector((state) => state.locationSlice);

  useEffect(() => {
    if (delayedPartagerStep == 2) {
      if (navigator.geolocation) {
        console.log("----------Getting location----------");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            useDispatch(setLocation({ latitude: 1, longitude: 1 }));
            console.log({ position });
            console.log("----------Received location----------");
            dispatch(increasePartagerStep());
          },
          (error) => {
            console.log({ error });
            dispatch(
              setAppError({
                visible: true,
                name: "Location required",
                message: "Location service not available, try again later.",
                actionTitle: "Retry",
                canIgnore: false,
              })
            );
            console.log("----------Location unavailable----------");
          }
        );
      } else {
        dispatch(
          setAppError({
            visible: true,
            name: "Location required",
            message:
              "Our app requires your location service to work. Please try again after enabling location service.",
            actionTitle: "Retry",
            canIgnore: false,
          })
        );
        console.log("----------Permission denied----------");
      }
    }
  }, [twiceDelayedPartagerStep]);

  const obtainLocation: MouseEventHandler = () => {};

  return (
    <>
      <div className="flex flex-col min-h-screen bg-stone-100">
        <div className="bg-black text-gray-400 p-5 flex justify-between items-center">
          <span>Partager v1.0</span>
          <span>
            <button className="active:scale-90 hover:animate-spin-once mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                className="fill-gray-400 w-4 h-4"
              >
                <path d="M11.078035,0 C11.3724371,0 11.6350302,0.183056678 11.7339285,0.457230801 L12.4396543,2.41370379 C12.6930786,2.47650967 12.9108093,2.54030436 13.0942558,2.60592238 C13.2952001,2.67779926 13.5540423,2.78741449 13.8746747,2.93586046 L15.5184936,2.06596774 C15.794148,1.92009416 16.1343396,1.97375545 16.3504064,2.19719235 L17.7960017,3.69209722 C17.98787,3.8905102 18.0422042,4.18265582 17.9342767,4.43557836 L17.162857,6.24336136 C17.2913496,6.47797752 17.3939318,6.67854463 17.4711247,6.84658462 C17.5553742,7.02998593 17.6588292,7.28241713 17.7829588,7.60671302 L19.580333,8.37623211 C19.8497082,8.4915611 20.0170118,8.76152727 19.9986241,9.05119919 L19.8669066,11.126215 C19.8494975,11.4004703 19.668825,11.6382294 19.4072566,11.7310995 L17.7049419,12.3355083 C17.6562729,12.5705675 17.6053791,12.772402 17.551477,12.9424906 C17.4883274,13.1417599 17.389065,13.3979932 17.2526724,13.7155635 L18.1084613,15.6068822 C18.2316885,15.879218 18.1635045,16.1990386 17.9395819,16.3990196 L16.3138559,17.8509252 C16.0957241,18.0457347 15.7773686,18.084139 15.5182641,17.9469002 L13.8421792,17.0591354 C13.5477413,17.2124998 13.2783109,17.3348831 13.0324612,17.4263047 C12.8127426,17.5080092 12.5685018,17.5992352 12.2997543,17.6999771 L11.6499659,19.5002547 C11.5529743,19.7689756 11.2984077,19.9507082 11.0099151,19.9571805 L9.10927684,20 C8.81300029,20.0064684 8.54492708,19.8269822 8.44118272,19.5525044 L7.6751041,17.5256808 C7.3232066,17.4026533 7.06612795,17.3070148 6.89898146,17.2366139 C6.74058527,17.1698987 6.53544077,17.0722593 6.28058727,16.9426265 L4.38190658,17.7549437 C4.12577479,17.8645252 3.82821583,17.812324 3.62584584,17.6223069 L2.22106797,16.3032781 C2.00593124,16.1012735 1.94386481,15.7866753 2.0664447,15.519534 L2.88322205,13.7395109 C2.76017205,13.4979963 2.65957084,13.2838441 2.58116863,13.0959926 C2.49857708,12.8981035 2.39862152,12.628586 2.28009144,12.2848943 L0.491710371,11.7412063 C0.190471763,11.6496264 -0.0110085834,11.3694211 0.000465944291,11.0580168 L0.071249487,9.13703967 C0.0806273232,8.88253689 0.2313194,8.65393727 0.463026654,8.5427144 L2.34096885,7.64127468 C2.42759746,7.32228988 2.50386559,7.07419005 2.57165467,6.89274074 C2.63878533,6.7130538 2.74293335,6.47740464 2.8854431,6.18143219 L2.06997455,4.45996626 C1.94312228,4.19217928 2.00336838,3.87420996 2.21965377,3.66998322 L3.62443163,2.34352648 C3.82439931,2.15470767 4.11840992,2.10075785 4.37358276,2.20606012 L6.27210909,2.98952564 C6.4823493,2.85093927 6.67247185,2.73658268 6.84371422,2.6461118 C7.04934485,2.53747289 7.3225817,2.42318736 7.66837893,2.29976859 L8.32789678,0.458652854 C8.42637398,0.183743082 8.68933933,0 8.98430143,0 L11.078035,0 Z M10.0237083,7.01854658 C8.35715373,7.01854658 7.00614429,8.35435786 7.00614429,10.0021646 C7.00614429,11.6499713 8.35715373,12.9857826 10.0237083,12.9857826 C11.6902629,12.9857826 13.0412723,11.6499713 13.0412723,10.0021646 C13.0412723,8.35435786 11.6902629,7.01854658 10.0237083,7.01854658 Z" />
              </svg>
            </button>
            <button className="active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                width="416.979px"
                height="416.979px"
                viewBox="0 0 416.979 416.979"
                className="fill-gray-400 w-4 h-4"
              >
                <g>
                  <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />
                </g>
              </svg>
            </button>
          </span>
        </div>

        <div className="grow flex justify-center items-center">
          {delayedPartagerStep == 1 && (
            <div
              className={`transition duration-500 ease-in-out ${
                partagerStep == 1 ? `opacity-100` : `opacity-0`
              }`}
            >
              <InputNameTemplate
                next={() => dispatch(increasePartagerStep())}
              />
            </div>
          )}
          {delayedPartagerStep == 2 && (
            <div
              className={`transition duration-500 ease-in-out ${
                partagerStep == 2 ? `opacity-100` : `opacity-0`
              }`}
            >
              <div className="max-w-xl p-8 flex flex-col items-center rounded-xl border-2 border-orange-500 shadow-md">
                <p className="mb-3 text-3xl font-light">Where are you?</p>
                <p className="my-3 text-justify">
                  Our app requires GPS service to be enabled to know your
                  location so that we can help you share your files to your love
                  ones nearby. Kindly share your location with us by clicking
                  the <span className="font-bold text-blue-600">"Allow"</span>{" "}
                  button. Yeet! 😎
                </p>
                <div className="w-full mt-3 flex justify-between">
                  <button
                    className="py-3"
                    onClick={() => dispatch(decreasePartagerStep())}
                  >
                    ← back
                  </button>
                  <button className="font-bold text-stone-100 px-5 py-3 bg-orange-500 rounded-xl animate-bounce">
                    GO!
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Partager;
