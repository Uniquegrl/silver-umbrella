export const BASE_URL = "buildbear.io";
export const BB_BACKEND_URL = `https://backend.${BASE_URL}`;
export const BB_API_KEY = "your_key";
run-script script_name flags='' sig='' args='':
  sh -c 'FOUNDRY_PROFILE=ci forge script script/{{script_name}}.s.sol {{sig}} {{args}}     --rpc-url "https://rpc.buildbear.io/medical-gamora-dab4d819"     --private-key "<PRIVATE_KEY_OF_UNLOCKED_ACCOUNT>"     --verifier sourcify     --verifier-url "https://rpc.buildbear.io/verify/sourcify/server/medical-gamora-dab4d819"     -vvvv {{flags}}' 

deploy-verify:
  sh -c 'just run-script <SCRIPT_NAME> "--broadcast --verify --slow"'
