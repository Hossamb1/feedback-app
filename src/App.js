import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import AboutPage from "./pages/aboutPage";
import AboutLinkIcon from "./components/aboutLinkIcon";
import { FeedbackProvider } from "./components/feedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutLinkIcon />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </FeedbackProvider>
  );
};

export default App;
