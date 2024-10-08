"use client";

import Image from "next/image";
import Link from "next/link";

export default function StripeNotification() {
  return (
    <div>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Stripe Notification
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Stripe Notification
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Notification Content */}
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-9 col-lg-7 text-center">
                {/* Start Image */}
                <Image
                  src="/public/assets/img/png-img/stripe-notification.png"
                  alt="Stripe Notification"
                  className="img-fluid w-auto h-auto"
                  width={860}
                  height={571}
                />
                {/* /.End Image */}
                <div className="mt-5">
                  <h2 className="fw-semibold mb-3 text-capitalize">
                    Payment Successful
                  </h2>
                  <p className="fs-16">
                    Your payment has been processed successfully. Thank you for
                    your purchase! You can return to the home page or view your
                    order details.
                  </p>
                  {/* Start Buttons */}
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <Link
                      href="/"
                      className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                    >
                      <span>Go To Home Page</span>
                      <span className="vr" />
                      <i className="fa-arrow-right fa-solid fs-14" />
                    </Link>
                    <Link
                      href="/order-details"
                      className="btn btn-secondary btn-lg d-inline-flex hstack gap-2"
                    >
                      <span>View Order Details</span>
                      <span className="vr" />
                      <i className="fa-arrow-right fa-solid fs-14" />
                    </Link>
                  </div>
                  {/* /.End Buttons */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Notification Content */}
      </div>
      {/* /. End Main Content */}
    </div>
  );
}
