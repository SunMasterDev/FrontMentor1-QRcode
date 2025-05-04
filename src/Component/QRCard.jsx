import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QRimage from "../assets/images/image-qr-code.png";

const QRCard = () => {
  return (
   <div className="text-center items-center max-w-xs w-full">
     <Card>
      <CardHeader>
        <img src={QRimage} alt="QRimage" 
        className="rounded-xl w-full mb-4"/>
        <CardTitle className="text-lg font-bold text-[#434E5D]">
            Improve your front-end skills by building projects
        </CardTitle>
        <CardDescription className="text-sm text-[#9398A2]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </CardDescription>
      </CardHeader>
    </Card>
   </div>
  );
};
export default QRCard;
