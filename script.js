const slider = {
  slideNumber: 4,
  progress: 280,
};

const start = new Date();

window.addEventListener("DOMContentLoaded", () => {
  console.log(`DOMContentLoaded-Event; Time: ${Date.now() - start} ms`);
});

window.addEventListener("load", () => {
  console.log(`load-Event; Time: ${Date.now() - start} ms`);

  const sliderLoaderElements = document.getElementsByClassName(
    "header-wrapper--slider-line-loader"
  );
  const sliderLineElements = document.getElementsByClassName(
    "header-wrapper--slider-line"
  );
  const sliderTitleElements = document.getElementsByClassName(
    "header-wrapper--slider-title"
  );

  const sliderRun = () => {
    if (slider.progress >= 280) {
      sliderLoaderElements[slider.slideNumber - 1].style.width = `${0}%`;
      sliderLineElements[slider.slideNumber - 1].classList.remove(
        "header-wrapper--slider-line-active"
      );
      sliderTitleElements[slider.slideNumber - 1].classList.remove(
        "header-wrapper--slider-title-active"
      );

      slider.progress = 0;
      slider.slideNumber++;
      if (slider.slideNumber > 4) slider.slideNumber = 1;

      sliderLineElements[slider.slideNumber - 1].classList.add(
        "header-wrapper--slider-line-active"
      );
      sliderTitleElements[slider.slideNumber - 1].classList.add(
        "header-wrapper--slider-title-active"
      );
    }

    sliderLoaderElements[
      slider.slideNumber - 1
    ].style.width = `${slider.progress}px`;

    slider.progress++;
    setTimeout(() => sliderRun(), 20);
  };

  sliderRun();
});
