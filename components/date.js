import moment from "moment";

export default function Date({ dateString }) {
  return moment(dateString).format("LL");
}
