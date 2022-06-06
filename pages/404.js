import Link from "next/link";
import Button from "@mui/material/Button";
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooooops ...</h1>
      <h2>That page cannot be found! </h2>
      <Image
        src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1653490683/404_uzze8l.jpg"
        height="40%"
        width="40%"
      />
      <p>
        Go back to the
        <Link href="/">
          <Button variant="contained">Homepage</Button>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
