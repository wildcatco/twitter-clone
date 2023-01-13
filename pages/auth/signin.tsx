/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const Signin: React.FC<Props> = ({ providers }) => {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 md:inline-flex rotate-6"
      />
      <div>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.id} className="flex flex-col items-center">
              <img
                src="/images/twitter-logo.png"
                alt="logo"
                className="w-36 object-cover"
              />
              <p className="text-sm italic my-10">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
