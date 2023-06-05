// Landing page
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img
        className="w-100 h-100 block max-h-80 max-w-80 p-2"
        src="/fin.png"
        alt="logo"
      />

      <br />
      <div className="flex justify-center max-w-50 max-h-50">
        <a href="https://discord.gg/gxZVca9uZU" target="_blank">
          <img src="/whiteDisc.png" alt="" />
        </a>
        <a href="https://www.tiktok.com/@sacsnowclub" target="_blank">
          <img src="/whiteTikTok.png" alt="" />
        </a>
        <a href="https://www.instagram.com/sacsnowclub/" target="_blank">
          <img src="/whiteIG.png" alt="" />
        </a>
      </div>

      <div>
        <a href="https://discord.gg/gxZVca9uZU" target="_blank">
          <br />
          JOIN OUR DISCORD
        </a>
        <a
          href="https://facebook.us15.list-manage.com/subscribe?u=63cf1cc6814ebaf9cda955576&id=f83b629815"
          target="_blank"
        >
          <br />
          SUBSCRIBE TO OUR EMAILS
        </a>
        <a
          href="https://csus.presence.io/form/2022-2023-recreation-club-membership-application"
          target="_blank"
        >
          <br />
          Become an Official Member of the club! (CSUS Students)
        </a>
        <a href="https://forms.gle/2V6MTsz2aS6AaCqw5" target="_blank">
          <br />
          23/24 Ikon Pass Discount Application!
        </a>
        <a
          href="https://us15.campaign-archive.com/home/?u=63cf1cc6814ebaf9cda955576&id=f83b629815"
          target="_blank"
        >
          <br />
          Read previous Emails
        </a>
        <a
          href="https://csus.presence.io/form/2022-2023-recreation-club-community-member-application"
          target="_blank"
        >
          <br />
          Become a Community Member (non-CSUS Students)
        </a>
      </div>
    </main>
  );
}
