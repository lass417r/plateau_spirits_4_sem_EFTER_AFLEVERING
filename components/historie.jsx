const Historie = ({ product }) => {
  return (
    <div className="container md:mt-16">
      <div className=" lg:grid lg:items-start lg:gap-x-8">
        {/* Product info */}
        <div className=" mt-10  sm:mt-16 sm:px-0 lg:mt-0">
          <h2 className="font-tyk text-mobileH2 text-blackbase md:text-wh2">Historien </h2>

          <div className="my-3 md:mb-16">
            <p className="font-copy text-copy text-blackbase">
              Efter en iskold svømmetur i en norsk sø, drak vi en flaske vodka og hørte historien om Bjørn - en mand, der fanger fisk med sine bare hænder under det spektakulære nordlys og presser
              kaviaren ud, før han sætter fisken tilbage i havet.
              <br />
              <br />
              Bjørns passion for fiskeri og hans imponerende færdigheder fangede øjeblikkeligt vores opmærksomheden da vi var på udkig efter en måde at skabe noget helt særligt. Vi besluttede os for
              at lave en vodka med arktisk kaviar og kalde den &apos;Röye&apos;, som på norsk betyder &apos;ørred&apos;, en hyldest til den velsmagende fisk, som Bjørn fanger.
              <br />
              <br />
              &apos;Röye&apos; blev den første i Plateau Spirits&apos; signaturserie. Den repræsenterer noget magisk og unikt, der kun er tilgængeligt i begrænset antal af 100 nummererede flasker.
              <br />
              <br />
              Serien er en hyldest til passionen, dedikation samt kvaliteten, der ligger bag produktionen af vores spiritusprodukter.
              <br />
              <br />
              Plateau Spirits har omhyggeligt udvalgt ingredienserne til &apos;Röye&apos;, som er lavet med den arktiske kaviar, der er håndpresset af Bjørn, før den er blevet tilsat den fine vodka.
              Resultatet er en subtil og kompleks smag, der kun kan opnås med omhyggelig håndtering af de eksklusive ingredienser.
              <br />
              <br />
              &apos;Röye&apos; er mere end bare en vodka - det er et symbol på Plateau Spirits&apos; høje standarder for kvalitet og vores engagement i at skabe noget unikt og særligt. Det er også en
              hyldest til naturens skønhed og de usædvanlige færdigheder, som Bjørn besidder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historie;

// {product.attributes.historie}
