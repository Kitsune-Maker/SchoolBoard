// სკოლის დაფის პარამეტრები
window.BOARD_CONFIG={
  // Google Sheets-ის ბმული (Share -> Anyone with the link -> Viewer).
  // შეგიძლია ცარიელიც დატოვო და ადმინ პანელიდან ჩასვა.
  SHEET_URL:"",

  // რამდენ წამში ერთხელ წაიკითხოს ცხრილი
  REFRESH_SECONDS:45,

  // ადმინ პანელის პაროლი (salted hash). ცარიელია -> პირველად გახსნისას
  // პანელი გაჩვენებს ორ ხაზს, ჩაანაცვლე ისინი აქ.
  PASS_SALT:"cf2a8ffa89fdc4b4f806bad3833e2fb1",
  PASS_HASH:"3f761d062cc52c27a3a64ecd23521fb552e9033758ab22721687bb2d9dea6b3b"
};
