import "./styles.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { UI } from "./UI";

library.add(faCloud);
dom.watch();

function website() {
  UI.load();
}
website();
