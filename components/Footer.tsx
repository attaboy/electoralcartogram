import { Lang, useLang } from "../hooks/useLang";
import { formatDate } from "../utils/formatDate";

export function Footer() {
  const [lang] = useLang();
  return lang === Lang.fr ? (
    <div className="columns">
      <div className="column">
        <h4>C’est quoi ça?</h4>

        <p>
          Au Canada, chaqun des 343 députés du Parlement à{" "}
          <a href="https://www.ourcommons.ca/fr">la Chambre des communes</a>{" "}
          représente une circonscription. Pour la plupart, les circonscriptions
          sont{" "}
          <a href="https://www.elections.ca/content.aspx?section=res&dir=cir/red/allo&document=index&lang=f">
            réparties uniformément par la population
          </a>{" "}
          au lieu de la géographie.* En 2026, la population moyenne d’une
          circonscription est d’environ 121&nbsp;000.
        </p>

        <p>
          Ce <a href="https://fr.wikipedia.org/wiki/Cartogramme">cartogramme</a>{" "}
          fait chaque circonscription la même taille et la même forme. L’accent
          est mis sur la répartition de la population. En général, les
          circonscriptions voisines sont proches les unes des autres, et la
          forme du pays reste évidente.
        </p>

        <p>
          <small>
            *Certaines zones rurales, les trois territoires, et
            l’Île-du-Prince-Edouard ont des circonscriptions dont la population
            est notablement moins nombreuse.
          </small>
        </p>
      </div>

      <div className="column">
        <h4>Crédits</h4>

        <p>
          Copyright &copy; <a href="https://attaboy.ca/">Luke Andrews</a>, 2019
        </p>

        <p>
          <a href="https://github.com/attaboy/electoralcartogram">
            Code source sur GitHub
          </a>
          <span>
            {" "}
            · Résultats des élections copiés de{" "}
            <a href="https://elections.ca/content.aspx?section=ele&dir=pas&document=index&lang=f">
              Élections Canada
            </a>
          </span>
        </p>

        <p>
          Commentaires (et corrections de français) encouragés:{" "}
          <a href="https://bsky.app/profile/attaboy.ca">
            @attaboy.ca sur Bluesky
          </a>
        </p>

        <p>
          Édition précédente: <a href="/2011/">2011</a>
        </p>

        {process.env.buildTimestamp ? (
          <p>
            v{process.env.version}, dernière modification:{" "}
            {formatDate(new Date(process.env.buildTimestamp), lang)}
          </p>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="columns">
      <div className="column">
        <h4>What’s this?</h4>

        <p>
          In Canada, each of the 343 Members of Parliament in the{" "}
          <a href="https://www.ourcommons.ca/en">House of Commons</a> represent
          a riding (also known as an electoral district). In general, the
          ridings are divided{" "}
          <a href="https://www.elections.ca/content.aspx?section=res&dir=cir/red/allo&document=index&lang=e">
            evenly by population
          </a>{" "}
          rather than geographical size.* As of 2026, the average population of
          a riding is approximately 121,000.
        </p>

        <p>
          In this{" "}
          <a href="https://en.wikipedia.org/wiki/Cartogram">cartogram</a>, each
          riding is the same size and shape, so population distribution is
          emphasized. In general, ridings that border each other geographically
          are shown near each other, with the rough shape of the country
          preserved.
        </p>

        <p>
          <small>
            *Some rural areas, the three territories, and Prince Edward Island
            have ridings with notably smaller populations.
          </small>
        </p>
      </div>

      <div className="column">
        <h4>Credits</h4>

        <p>
          Copyright &copy; <a href="https://attaboy.ca/">Luke Andrews</a>, 2019
        </p>

        <p>
          <a href="https://github.com/attaboy/electoralcartogram">
            Source code on GitHub
          </a>
          <span>
            {" "}
            · Electoral results copied from{" "}
            <a href="https://elections.ca/content.aspx?section=ele&dir=pas&document=index&lang=e">
              Elections Canada
            </a>
          </span>
        </p>

        <p>
          Feedback welcome:{" "}
          <a href="https://bsky.app/profile/attaboy.ca">
            @attaboy.ca on Bluesky
          </a>
        </p>

        <p>
          Previous edition: <a href="/2011/">2011</a>
        </p>

        {process.env.buildTimestamp ? (
          <p>
            v{process.env.version}, last modified:{" "}
            {formatDate(new Date(process.env.buildTimestamp), lang)}
          </p>
        ) : null}
      </div>
    </div>
  );
}