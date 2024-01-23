import { Internship } from "./Internship";
import { Students } from "./Students";

function initMap(): void {
  const student = new Students();
  const internship = new Internship();

  const studentLocation = {
    lat: student.getLocation().latitude,
    lng: student.getLocation().longtitude,
  };
  const businessLocation = {
    lat: internship.getLocationBusiness().latitude,
    lng: internship.getLocationBusiness().longtitude,
  };
  const custom1 =
    "https://maps.google.com/mapfiles/kml/pal2/icon14.png";
  const custom2 =
    "https://maps.google.com/mapfiles/kml/pal2/icon10.png";
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: studentLocation,
    }
  );

  const studentString = student.getName();
  const internshipString = `Welcome to ${internship.getBusinessName()}`;

  const studentwindow = new google.maps.InfoWindow({
    content: studentString,
    ariaLabel: studentString,
  });

  const internshipwindow = new google.maps.InfoWindow({
    content: internshipString,
    ariaLabel: internshipString,
  });
  const studentMarker = new google.maps.Marker({
    position: studentLocation,
    map,
    title: student.getName(),
    icon: custom1,
  });

  const internshipMarker = new google.maps.Marker({
    position: businessLocation,
    map,
    title: internship.getBusinessName(),
    icon: custom2,
  });

  studentMarker.addListener("click", () => {
    studentwindow.open({
      anchor: studentMarker,
      map,
    });
  });

  internshipMarker.addListener("click", () => {
    internshipwindow.open({
      anchor: internshipMarker,
      map,
    });
  });
}

export {};
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
