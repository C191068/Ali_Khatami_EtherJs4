# Ali_Khatami_EtherJs4

### Ganache and Networks

Here we will deploy our contract at https://github.com/C191068/Ali-Khatami_Ether.Js3  on a fake blockchain <br>
We gonna be using Ganache by going to this link https://trufflesuite.com/ganache/ as our Javascript VM or fake blockchain <br>

![f24](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/0e999b9c-1cc5-4393-8a7c-fb1440b96758)
Figure1: Going to the link we will click the ```Download``` button <br>

![f25](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/cbbac0ff-b514-40f1-af0b-215cffef1daa)

Figure2: Then we will click ```install``` <br>

![f26](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/d68d3824-f3bc-45a4-94f8-13099a6c90d4)

Figure3: Then we will click ```QuckStart``` <br>

![f27](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/922ba5d7-95fc-49e5-8b0a-77b9f529ceef)

Figure4: Then we will see it is running fake blockchain on my computer i.e locally <br>

![f28](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/91859fee-5059-4078-9fd5-6147247252a3)

Figure5: If we click the key icon it will come the above pop up showing the private key <br>

In our code what we need at first to do is connnect it to block chain <br>

![f29](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/4f8a4062-bdd7-4a03-bbe9-efe043ddf8fc)

Figure6: In case of Remix , our smart contract connects to metamask wallet account whicha has connection <br>

to blockchain behind the scenes <br>

![f30](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/8110cd63-339a-45c6-9fa2-f1d48bc5a2bd)

Figure7: by going this way we will click ```add network``` <br>

![f31](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/0d5cd92e-c3a2-42fd-9986-cbd319c8232a)

Figure8: if we click the ```Network``` option here we will see the information of various networks <br>

All of the above networks have one thing in common and that is ```RPC URL``` <br>

RPC full form is Remote Procedure Call and it stands for a connection to a blockchain node <br>
that somebody is running <br>

The RPC URL conncts us to make API calls and to interact with blockchain nodes <br>

Blockchain node run with software and some of them expose an API call <br>



![f32](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/79463fc4-548e-477c-8761-bb113434eaa2)


Figure9: If we go to this https://github.com/ethereum/go-ethereum we will see there are instruction sto run our own<br>
blockchain node for real blockchain like Ethereum <br>

![f33](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/0548e6ef-3e0b-4084-8955-50b7b43f9f8f)

Figure10: If we go to our Ganache application we can see that at top there is RPC server which is the <br>

endpoint of our blockchain node <br>


![f34](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/ba94d236-b6c5-42a2-a6aa-cbd65ae4699f)

Figure11: We will copy the address and paste it on ```akrkdeploy.js``` file so that we can connect  <br>



![f35](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/a748c902-bb5d-41ee-b005-fdbbb0c51a80)


Figure12: By going to this link 

https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethereum/execution-apis/assembled-spec/openrpc.json&uiSchema%5BappBar%5D%5Bui:splitView%5D=false&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false

we can see how many different calls we can make to our node to get different information <br>

### Introduction to Ether.js 

Ether.js is one of the popular javascript base tool kit that allows us to interact with different blockchain <br>

![f36](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/7acef845-5ac8-4517-8c62-ba6c123ccb24)

Figure13: another popular tool is web3.js <br>

![f37](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/3ddc536b-53c8-4d3b-95a1-d5e2c739073e)

Figure14: To add ethers we have to write the av=bove command <br>


![f38](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/3cb43158-d7f2-45a1-84da-2496aedbd8c9)

Figure15: To import ethers to our deploy.js file we write the above code <br>

```
const ethers = require("ethers");

```

Now we have ethers here we can create provider object within our main function <br>

The reason we write it outside of the main function because we gonna bring all packages to script <br>
before calling the main function <br>

```const``` is used so that ethers can't be changed <br>

```Remix``` platform does this all behind the scenes <br>

![f39](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/b79c4e4f-4f2e-4d96-9bba-c390fc940a06)

Figure16: Through this code ```const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");``` <br>
our script gonna connect to blockchain <br>

![f41](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/6fb45823-567c-4bd6-a1b9-d54d2ffaa620)
Figure17: by using this code ```const wallet = new ethers.Wallet()``` we gonnna setup wallet account <br>

![f42](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/95d2e256-b70f-4c09-afcd-76109ccd5246)
Figure18: going to ```Ganache``` by clicking to the key icon again we will copy the private key address <br>

![f43](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/4bf65b59-ee4a-4969-9455-04a456c9df25)
Figure20: then we will paste it it here as a parameter <br>

![f44](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/bd4d9580-c8b8-42cc-bdee-75cb2894a4d4)

Figure21: the above two lines of code gives us everything we need to interact with our smart contract <br>

The private key we used is gonna encrypt all of our transactions <br>

![f45](https://github.com/C191068/Ali_Khatami_EtherJs4/assets/89090776/f795036b-d066-440d-ae8c-e3d5603ad8c8)

Figure22: As we have now provider and wallet , we gonna grab contractor objects from the two files marked <br>
here <br>

To deploy our contract we gonna need the ABI and binary compiled code of our contract <br>

To read from the above two files we need a package called fs <br>








