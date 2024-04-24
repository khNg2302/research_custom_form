import Image from "@/components/Report-Custom/Image";
import Layout from "@/components/Report-Custom/Layout";
import Text from "@/components/Report-Custom/Text";

const ReportItems = {
  text: () => Text,
  image: () => Image,
  layout: () => Layout,
};

export default ReportItems;
