"use client";

import Modal from "./Modal";

const SubscribeModal = () => {
  let content = (
    <div className="text-center">
      No products available.
    </div>
  );

  return ( 
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium"
      isOpen
      onChange={() => {}}
    >
      Subscription
    </Modal>
  );
}
 
export default SubscribeModal;