import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

import styles from "./TrialForm.module.css";

export default function TrialForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const programs = [
    { label: "Adults Jiu Jitsu", value: "adults" },
    { label: "Kids Jiu Jitsu", value: "kids" },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.program) {
      newErrors.program = "Please select a program";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { fullName, email, phone } = formData;

    const programEndpointMap = {
      adults: "group-adults",
      kids: "group-kids",
    };

    const endpoint = programEndpointMap[formData.program] || "group-adults";

    const url = new URL(`https://schedule.satoribjjacademy.com/${endpoint}`);
    url.searchParams.append("full_name", fullName);
    url.searchParams.append("email", email);
    url.searchParams.append("phone", phone);

    window.location.href = url.toString();
  };

  return (
    <div className={styles.trialForm}>
      <div className={styles.trialForm__overlay} onClick={onClose}>
        <div
          className={styles.trialForm__modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.trialForm__header}>
            <button
              type="button"
              className={styles.trialForm__closeButton}
              onClick={onClose}
              aria-label="Close form"
            >
              ✕
            </button>
          </div>

          <div className={styles.trialForm__logoWrapper}>
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_85/r_1000/u_https://storage.googleapis.com/highlevel-backend.appspot.com/location/r85eR7djaWtBpVa5qGlr/form/r6m7LD8fujv2KSzEtUPM/ac808fdc-98aa-4452-bbc4-16df4d1b3f50.png"
              alt="Satori Brazilian Jiu Jitsu"
              className={styles.trialForm__logo}
            />
          </div>

          <h2 className={styles.trialForm__title}>
            Start Your{" "}
            <span className={styles.trialForm__titleBold}>Free Trial</span>
          </h2>

          <p className={styles.trialForm__subtitle}>
            Fill out your details below and reserve your first class.<br/>
            No commitment, just come train.
          </p>

          <form className={styles.trialForm__form} onSubmit={handleSubmit}>
            <div className={styles.trialForm__field}>
              <InputText
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Full Name*"
                className={`${styles.trialForm__input} ${errors.fullName ? "p-invalid" : ""}`}
              />
              {errors.fullName && (
                <Message
                  severity="error"
                  text={errors.fullName}
                  className={styles.trialForm__message}
                />
              )}
            </div>

            <div className={styles.trialForm__field}>
              <InputText
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone Number*"
                className={`${styles.trialForm__input} ${errors.phone ? "p-invalid" : ""}`}
              />
              {errors.phone && (
                <Message
                  severity="error"
                  text={errors.phone}
                  className={styles.trialForm__message}
                />
              )}
            </div>

            <div className={styles.trialForm__field}>
              <InputText
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email Address*"
                className={`${styles.trialForm__input} ${errors.email ? "p-invalid" : ""}`}
              />
              {errors.email && (
                <Message
                  severity="error"
                  text={errors.email}
                  className={styles.trialForm__message}
                />
              )}
            </div>

            <div className={styles.trialForm__field}>
              <Dropdown
                value={formData.program}
                options={programs}
                onChange={(e) => handleChange("program", e.value)}
                placeholder="Choose a Program*"
                className={`${styles.trialForm__dropdown} ${errors.program ? "p-invalid" : ""}`}
                appendTo="self"
              />
              {errors.program && (
                <Message
                  severity="error"
                  text={errors.program}
                  className={styles.trialForm__message}
                />
              )}
            </div>

            <Button
              type="submit"
              label="Book My Free Trial"
              className={styles.trialForm__button}
            />

            <p className={styles.trialForm__footnote}>
              We’ll take you to the booking page to choose your class time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}