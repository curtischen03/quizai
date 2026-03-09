"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileFriendlyHero: React.FC = () => {
  const router = useRouter();
  return (
    <div className="px-0 pt-5 my-md-5 text-center outline-none">
      <div className="container px-4">
        <h1 className="display-5 fw-bold mb-3">Custom Quizzes</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 display-5 text-muted">Create, Share, Take </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
              onClick={() => {
                router.push("/create");
              }}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => {
                router.push("/quiz");
              }}
            >
              See Other Quizzes
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-100 d-flex align-items-center justify-content-center mb-5"
        style={{
          minHeight: "200px",
          maxHeight: "50vh",
        }}
      >
        <div className="w-100 px-0 px-md-5">
          <img
            src="./image.png"
            className="img-fluid border rounded-md-3 shadow-lg mb-4 d-block mx-auto"
            alt="Example image"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileFriendlyHero;
