import React from "react";
import styles from "../styles/Contact.module.css";

function Kontakt() {
  return (
    <div className="pt-10 lg:w-96 ">
      <form className={styles.form}>
        <div>
          <label className="text-copy font-normal text-blackbase" for="fname">
            Fulde Navn
          </label>
          <input type="text" placeholder="f.eks. John Doe" name="name" />
        </div>
        <div>
          <label className="text-copy font-normal text-blackbase" for="email">
            Email
          </label>
          <input className={styles.email} type="text" placeholder="f.eks. johndoe@mail.com" name="email" />
        </div>

        <div>
          <label className="text-copy font-normal text-blackbase" for="phone">
            Telefon nummer
          </label>
          <input className={styles.phone} placeholder="f.eks. 22222222" type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
        <div>
          <label className="text-copy font-normal text-blackbase" for="email">
            Emne
          </label>
          <input className={styles.email} type="text" placeholder="f.eks. forspørgelse på ..." name="emne" />
        </div>

        <div>
          <label className="text-copy font-normal text-blackbase" for="subject">
            Besked
          </label>
          <textarea id="subject" name="subject" placeholder="Her skal du skrive din besked."></textarea>
        </div>

        <input
          className="voresKnap justify-end border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary tracking-wider text-black400"
          onClick={(e) => e.preventDefault()}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default Kontakt;
