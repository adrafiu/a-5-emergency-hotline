//* heart-icon count:

const heartCount = document.getElementById("heart");
let count = 0;

const heartIcons = document.querySelectorAll(".heart-icon");

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function () {
    count++;
    heartCount.textContent = count;
  });
}

//* Call button:

// Coin select
const coinElement = document.getElementById("coin-count");
let coins = 100; // শুরুতে 100 coin
coinElement.textContent = coins;

// Call history container
const historyContainer = document.getElementById("call-history");

// সব Call button select
const callButtons = document.querySelectorAll(".call-btn");

// Function: সময় নেয়ার জন্য
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// প্রতিটি Call button এর জন্য
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    // কোন কার্ড থেকে ক্লিক হলো সেটা বের করি
    const parentCard = callButtons[i].closest(".card");

    // সেই কার্ডের সার্ভিস নাম + নাম্বার বের করি
    const serviceName = parentCard.querySelector("h1").textContent;
    const serviceNumber =
      parentCard.querySelector(".service-number").textContent;

    // যদি coin থাকে
    if (coins >= 20) {
      alert(`Calling ${serviceName} ${serviceNumber}...`);

      // ২০ coin কমাও
      coins -= 20;
      coinElement.textContent = coins;

      // নতুন history যোগ করো
      const newHistory = document.createElement("div");
      newHistory.className =
        "bg-[#fafafa] w-11/12 mx-auto p-3 rounded-lg mt-4 flex justify-between";
      newHistory.innerHTML = `
          <div>
            <h1 class="font-bold">${serviceName}</h1>
            <p class="text-gray-500">${serviceNumber}</p>
          </div>
          <p class="text-gray-500 flex items-center">${getCurrentTime()}</p>
        `;
      historyContainer.prepend(newHistory);
    } else {
      // Coin নাই
      alert("You don't have enough coins, so the call cannot be made!");
    }
    // Clear button select
    const clearBtn = document.querySelector("aside button");

    // Clear button click event
    clearBtn.addEventListener("click", function () {
      historyContainer.innerHTML = ""; // history মুছে ফেলা হলো
    });
  });
}

 //* Navbar copy count element

  const copyCountElement = document.getElementById("copy-count");
  let copyCount = 0;

  // সব Copy button select
  const copyButtons = document.querySelectorAll(".copy-btn");

  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
      // কোন কার্ড থেকে ক্লিক হলো সেটা বের করি
      const parentCard = copyButtons[i].closest(".card");

      // সেই কার্ডের সার্ভিস নাম্বার বের করি
      const serviceNumber = parentCard.querySelector(".service-number").textContent;

      // ১. Alert দেখাও
      alert("Number copied successfully! (" + serviceNumber + ")");

      // ২. Copy count বাড়াও (২ করে)
      copyCount += 2;
      copyCountElement.textContent = copyCount;

      // ৩. Clipboard এ copy করো
      navigator.clipboard.writeText(serviceNumber)
        .then(() => {
          console.log("Copied: " + serviceNumber);
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
    });
  }
