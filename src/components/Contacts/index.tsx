import React, { useState } from "react";
import {
  StyledAppContact,
  StyledAppFormButton,
  StyledAppFormControl,
  StyledAppFormGroup,
  StyledAppFormTextArea,
  StyledAppTitleWrapper,
  StyledContactList,
  StyledContactPageWrapper,
  StyledContactText,
  StyledContainerWrapper,
  StyledListItem,
  StyledScreenBodyItem,
  StyledScreenBodyWrapper,
  StyledScreenWrapper,
  StyledSocialMediaList,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { IcGithub, IcLinkedin } from "common/icons";

function Contacts() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState<{
    fullname: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  }>({
    fullname: false,
    email: false,
    subject: false,
    message: false,
  });

  console.log(process.env.SENDGRID_API_KEY);

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  // Validation check method
  const handleValidation = () => {
    let tempErrors = {
      fullname: false,
      email: false,
      subject: false,
      message: false,
    };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <StyledContactPageWrapper id='contact'>
        <StyledContainerWrapper>
          <StyledScreenWrapper>
            <StyledScreenBodyWrapper>
              <StyledScreenBodyItem
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <StyledAppTitleWrapper>
                  <span>CONTACT</span>
                  <span>US</span>
                </StyledAppTitleWrapper>
                <StyledContactList>
                  <StyledListItem>
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      style={{ fontSize: 20 }}
                    />
                    <StyledContactText>Giza, Egypt</StyledContactText>
                  </StyledListItem>

                  <StyledListItem>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: 20 }} />
                    <StyledContactText>
                      <a href='tel:+201153613622' title='Give me a call'>
                        +201 153 613 622
                      </a>
                    </StyledContactText>
                  </StyledListItem>

                  <StyledListItem>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ fontSize: 20 }}
                    />

                    <StyledContactText>
                      <a
                        href='mailto:youssif.hegab123@gmail.com'
                        title='Send me an email'
                      >
                        youssif.hegab123@gmail.com
                      </a>
                    </StyledContactText>
                  </StyledListItem>
                </StyledContactList>
                <StyledSocialMediaList>
                  <li
                    onClick={() =>
                      window?.open("https://github.com/youssifhegab")
                    }
                  >
                    <IcGithub />
                  </li>
                  <li
                    onClick={() =>
                      window?.open(
                        "https://www.linkedin.com/in/youssif-hegab-036b63189/"
                      )
                    }
                  >
                    <IcLinkedin />
                  </li>
                </StyledSocialMediaList>
              </StyledScreenBodyItem>
              <StyledScreenBodyItem>
                <form onSubmit={handleSubmit}>
                  <StyledAppFormGroup>
                    <StyledAppFormControl
                      type='text'
                      placeholder='NAME'
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      name='fullname'
                    />
                  </StyledAppFormGroup>
                  <StyledAppFormGroup>
                    <StyledAppFormControl
                      placeholder='EMAIL'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </StyledAppFormGroup>
                  <StyledAppFormGroup>
                    <StyledAppFormControl
                      placeholder='SUBJECT'
                      type='text'
                      name='subject'
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </StyledAppFormGroup>
                  <StyledAppFormGroup style={{ marginTop: "40px" }}>
                    <StyledAppFormTextArea
                      placeholder='MESSAGE'
                      name='message'
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    {errors?.message && (
                      <p style={{ color: "red" }}>
                        Message body cannot be empty.
                      </p>
                    )}
                  </StyledAppFormGroup>
                  <StyledAppFormGroup
                    style={{ marginBottom: "0px", textAlign: "right" }}
                  >
                    <StyledAppFormButton>SEND</StyledAppFormButton>
                  </StyledAppFormGroup>
                </form>
                {showSuccessMessage && (
                  <p style={{ color: "green" }}>
                    Thank you! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p style={{ color: "red" }}>
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </StyledScreenBodyItem>
            </StyledScreenBodyWrapper>
          </StyledScreenWrapper>
        </StyledContainerWrapper>
      </StyledContactPageWrapper>
    </>
  );
}

export default Contacts;
