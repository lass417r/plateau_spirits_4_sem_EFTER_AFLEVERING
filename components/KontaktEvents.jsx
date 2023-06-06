import React from "react";
import styles from "../styles/Contact.module.css";

function KontaktEvents() {
  return (
    <div className="">
      <form className={styles.form}>
        <div>
          <label className="text-copy font-normal text-yellowbase" for="fname">
            Fulde Navn
          </label>
          <input type="text" placeholder="f.eks. John Doe" name="name" />
        </div>
        <div>
          <label className="text-copy font-normal text-yellowbase" for="email">
            Email
          </label>
          <input className={styles.email} type="text" placeholder="f.eks. johndoe@mail.com" name="email" />
        </div>

        <div>
          <label className="text-copy font-normal text-yellowbase" for="phone">
            Telefon nummer
          </label>
          <input className={styles.phone} placeholder="f.eks. 22222222" type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
        <div>
          <label className="text-copy font-normal text-yellowbase" for="email">
            Antal personer
          </label>
          <input className={styles.email} type="text" placeholder="f.eks. 30 personer" name="personer" />
        </div>
        <div>
          <label className="text-copy font-normal text-yellowbase" for="country">
            Type event
          </label>
          <select id="country" className={styles.select} name="country">
            <option value="general"> Privat</option>
            <option value="tickets"> Erhverv</option>
          </select>
        </div>
        <div>
          <label className="text-copy font-normal text-yellowbase" for="subject">
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

export default KontaktEvents;
