import { useState, useEffect } from "react";

const ErrorBoundary = ({ location, children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event) => {
      setHasError(true);
      console.error("ErrorBoundary caught an error", event.error);
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="main-content">
        <div style={styles.container}>
          <div style={styles.errorBox}>
            <h1 style={styles.title}>Oops! Something went wrong.</h1>
            <p style={styles.message}>
              {`We're sorry for the inconvenience. Please try again later or
              contact support if the issue persists.`}
            </p>
            <button style={styles.button} onClick={location}>
              GO BACK
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  errorBox: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#ff4d4f",
  },
  message: {
    fontSize: "16px",
    color: "#595959",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
};

export default ErrorBoundary;
