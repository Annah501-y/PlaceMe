

/*
|--------------------------------------------------------------------------
| Download App Section
|--------------------------------------------------------------------------
| Purpose:
| Encourage users to install the mobile application for a faster
| and more convenient ordering experience.
|
| Future Enhancements:
| - Link directly to App Store and Google Play.
| - Display app ratings and download statistics.
| - Add QR code download functionality.
|--------------------------------------------------------------------------
*/

import mobileAppImage from "../../assets/app/appstore.png";
import googlePlayBadge from "../../assets/app/googleplay.jpg";
import appStoreBadge from "../../assets/app/mobile.jpg";

const DownloadApp = () => {
  return (
    <section className="bg-orange-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Responsive Layout */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Content Section */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Get the App and Order Anywhere
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Download our mobile application and enjoy a seamless
              food ordering experience. Browse restaurants, track
              deliveries in real time, and receive exclusive offers.
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <img
                src={googlePlayBadge}
                alt="Download on Google Play"
                className="h-12 w-auto"
              />

              <img
                src={appStoreBadge}
                alt="Download on App Store"
                className="h-12 w-auto"
              />

            </div>

          </div>

          {/* Mobile App Preview */}
          <div className="flex justify-center">

            <img
              src={mobileAppImage}
              alt="Mobile App Preview"
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default DownloadApp;