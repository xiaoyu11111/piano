import { WeElement, define, h } from "omi";

class AppHeader extends WeElement {
  render(props) {
    return h(
      "div",
      null,
      h(
        "div",
        {
          class: "text-center"
        },
        h(
          "p",
          {
            class: ""
          },
          "Try it by clicking, tapping, or using your keyboard 1 to 9:"
        ),
        h(
          "p",
          {
            class: ""
          },
          "\u9F20\u6807\u70B9\u51FB\u94A2\u7434\u952E\u6216\u8005\u952E\u76D8\u6309\u6570\u5B57\u952E 1 ~ 9:"
        ),
        h(
          "div",
          {
            style: "color: rgb(119, 119, 119);"
          },
          h(
            "svg",
            {
              fill: "currentColor",
              preserveAspectRatio: "xMidYMid meet",
              height: "32",
              width: "32",
              viewBox: "0 0 40 40",
              style: "vertical-align: middle;"
            },
            h(
              "g",
              null,
              h("path", {
                d:
                  "m33.4 20l-13.4 13.4-13.4-13.4 2.5-2.3 9.3 9.3v-20.4h3.2v20.4l9.4-9.3z"
              })
            )
          )
        )
      )
    );
  }
}

AppHeader.css = `
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;

    }

    .text-white {
        color: #fff !important;

    }

    .text-sm-center {
        text-align: center !important;
    }

    .mt-4,
    .my-4 {
        margin-top: 1.5rem !important;
    }

    .pb-5,
    .py-5 {
        padding-bottom: 3rem !important;
    }

    .pt-5,
    .py-5 {
        padding-top: 3rem !important;
    }

    .btn:not(:disabled):not(.disabled) {

        cursor: pointer;

    }

    .btn-group-lg>.btn,
    .btn-lg {

        padding: 5px 10px;
        font-size: 12px;
        line-height: 15px;
        border-radius: 3px;

    }

    .btn-outline-light {

        color: #f8f9fa;
        background-color: transparent;
        background-image: none;
        border-color: #f8f9fa;

    }

    .btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        padding: 15px 7.5px;
        font-size: 15px;
        line-height: 15px;
        border: 1px solid #fff;
        border-radius: 5px;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    a {
        margin: 0 10px;
        text-decoration: none;
    }

    .text-center {
        margin-top: 12px;
        text-align: center !important;
    }

    p {
        margin: 0 10px;
    }
`;
define("app-header", AppHeader);
