import { cn } from "@/lib/utils"

export function IconSparkles({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      {...props}>
      <path
        d="M7.73047 16.2559C7.81836 16.2559 7.88916 16.2266 7.94287 16.168C8.00146 16.1143 8.03809 16.0435 8.05273 15.9556C8.15039 15.1841 8.25781 14.5347 8.375 14.0073C8.49707 13.48 8.6582 13.0479 8.8584 12.7109C9.05859 12.374 9.32471 12.1055 9.65674 11.9053C9.98877 11.7051 10.4136 11.5513 10.9312 11.4438C11.4536 11.3315 12.0933 11.2339 12.8501 11.1509C12.9429 11.1411 13.0161 11.1069 13.0698 11.0483C13.1284 10.9897 13.1577 10.9165 13.1577 10.8286C13.1577 10.7407 13.1284 10.6675 13.0698 10.6089C13.0161 10.5503 12.9429 10.5161 12.8501 10.5063C12.0933 10.4233 11.4536 10.3281 10.9312 10.2207C10.4136 10.1084 9.98877 9.95215 9.65674 9.75195C9.32471 9.55176 9.05859 9.2832 8.8584 8.94629C8.6582 8.60938 8.49707 8.17725 8.375 7.6499C8.25781 7.12256 8.15039 6.4707 8.05273 5.69434C8.03809 5.61133 8.00146 5.54297 7.94287 5.48926C7.88916 5.43066 7.81836 5.40137 7.73047 5.40137C7.64258 5.40137 7.56934 5.43066 7.51074 5.48926C7.45703 5.54297 7.42285 5.61133 7.4082 5.69434C7.31543 6.4707 7.20801 7.12256 7.08594 7.6499C6.96875 8.17725 6.80762 8.60938 6.60254 8.94629C6.40234 9.2832 6.13623 9.55176 5.8042 9.75195C5.47217 9.95215 5.04736 10.1084 4.52979 10.2207C4.01221 10.3281 3.37256 10.4233 2.61084 10.5063C2.51807 10.5161 2.44238 10.5503 2.38379 10.6089C2.3252 10.6675 2.2959 10.7407 2.2959 10.8286C2.2959 10.9165 2.3252 10.9897 2.38379 11.0483C2.44238 11.1069 2.51807 11.1411 2.61084 11.1509C3.36768 11.2485 4.00488 11.3584 4.52246 11.4805C5.04004 11.5977 5.4624 11.7539 5.78955 11.9492C6.12158 12.1445 6.3877 12.4082 6.58789 12.7402C6.78809 13.0674 6.94922 13.4922 7.07129 14.0146C7.19336 14.5371 7.30566 15.1841 7.4082 15.9556C7.42285 16.0435 7.45703 16.1143 7.51074 16.168C7.56934 16.2266 7.64258 16.2559 7.73047 16.2559ZM3.03564 8.57275C3.09424 8.57275 3.14307 8.55322 3.18213 8.51416C3.22119 8.4751 3.24316 8.42871 3.24805 8.375C3.31152 7.91113 3.375 7.55225 3.43848 7.29834C3.50195 7.03955 3.60205 6.84668 3.73877 6.71973C3.87549 6.58789 4.07812 6.48535 4.34668 6.41211C4.61523 6.33887 4.98877 6.25586 5.46729 6.16309C5.59424 6.14355 5.65771 6.07275 5.65771 5.95068C5.65771 5.89209 5.63818 5.8457 5.59912 5.81152C5.56494 5.77246 5.521 5.74805 5.46729 5.73828C4.98877 5.66992 4.61279 5.604 4.33936 5.54053C4.0708 5.47217 3.86816 5.37207 3.73145 5.24023C3.59961 5.10352 3.50195 4.90332 3.43848 4.63965C3.375 4.37109 3.31152 4.00244 3.24805 3.53369C3.2334 3.40186 3.1626 3.33594 3.03564 3.33594C2.90869 3.33594 2.83545 3.4043 2.81592 3.54102C2.76221 4 2.70361 4.35889 2.64014 4.61768C2.57666 4.87646 2.47656 5.07178 2.33984 5.20361C2.20312 5.33057 1.99805 5.43066 1.72461 5.50391C1.45605 5.57227 1.08252 5.65039 0.604004 5.73828C0.477051 5.7627 0.413574 5.8335 0.413574 5.95068C0.413574 6.07275 0.486816 6.14355 0.633301 6.16309C1.10205 6.24609 1.4707 6.32178 1.73926 6.39014C2.0127 6.4585 2.21533 6.55859 2.34717 6.69043C2.479 6.82227 2.57666 7.02002 2.64014 7.28369C2.70361 7.54248 2.76221 7.90381 2.81592 8.36768C2.83545 8.50439 2.90869 8.57275 3.03564 8.57275ZM6.40479 3.82666C6.48291 3.82666 6.53174 3.78271 6.55127 3.69482C6.61475 3.32861 6.67578 3.06006 6.73438 2.88916C6.79297 2.71338 6.90771 2.58887 7.07861 2.51562C7.24951 2.44238 7.5376 2.37158 7.94287 2.30322C8.03076 2.28369 8.07471 2.23486 8.07471 2.15674C8.07471 2.06885 8.03076 2.02002 7.94287 2.01025C7.5376 1.93701 7.24951 1.86621 7.07861 1.79785C6.90771 1.72461 6.79297 1.60254 6.73438 1.43164C6.67578 1.25586 6.61475 0.982422 6.55127 0.611328C6.53174 0.523438 6.48291 0.479492 6.40479 0.479492C6.31689 0.479492 6.26807 0.523438 6.2583 0.611328C6.18994 0.982422 6.12646 1.25586 6.06787 1.43164C6.01416 1.60254 5.89941 1.72461 5.72363 1.79785C5.55273 1.86621 5.26465 1.93701 4.85938 2.01025C4.77148 2.02002 4.72754 2.06885 4.72754 2.15674C4.72754 2.23486 4.77148 2.28369 4.85938 2.30322C5.26465 2.37158 5.55273 2.44238 5.72363 2.51562C5.89941 2.58887 6.01416 2.71338 6.06787 2.88916C6.12646 3.06006 6.18994 3.32861 6.2583 3.69482C6.26807 3.78271 6.31689 3.82666 6.40479 3.82666Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconOpenAI({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}>
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

export function IconUser({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}>
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

export function IconGoogle({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-4", className)}
      {...props}
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          fill="#4285F4"></path>
        <path
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          fill="#34A853"></path>
        <path
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          fill="#FBBC05"></path>
        <path
          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          fill="#EB4335"></path>
      </g>
    </svg>
  )
}

export function MetaLlama({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="98"
      height="65"
      viewBox="0 0 98 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path
        d="M10.4844 42.5182C10.4844 46.2245 11.2979 49.0701 12.3612 50.7916C13.7553 53.0464 15.8346 54.0017 17.9544 54.0017C20.6886 54.0017 23.1899 53.3232 28.0101 46.6565C31.8717 41.3131 36.4219 33.8126 39.4835 29.1105L44.6683 21.1443C48.27 15.6118 52.4388 9.4616 57.2186 5.29282C61.1207 1.89031 65.3299 0 69.5662 0C76.6785 0 83.4531 4.12151 88.6379 11.8515C94.3122 20.3173 97.0667 30.9806 97.0667 41.9848C97.0667 48.5266 95.7772 53.3333 93.5831 57.1308C91.4633 60.8034 87.3316 64.4726 80.3814 64.4726V54.0017C86.3325 54.0017 87.8177 48.5333 87.8177 42.2751C87.8177 33.357 85.7384 23.4599 81.1578 16.3882C77.9072 11.3722 73.6945 8.30715 69.0599 8.30715C64.0472 8.30715 60.0135 12.0878 55.4802 18.8287C53.07 22.4101 50.5958 26.7747 47.8177 31.6996L44.7595 37.1173C38.616 48.0101 37.0599 50.4911 33.9882 54.5856C28.6042 61.7553 24.0067 64.4726 17.9544 64.4726C10.7747 64.4726 6.23458 61.3637 3.42277 56.6785C1.12741 52.8608 0 47.8515 0 42.1435L10.4844 42.5182Z"
        fill="#0081FB"
      />
      <path
        d="M8 12.5907C12.8067 5.1814 19.7435 0 27.6996 0C32.3072 0 36.8878 1.36372 41.6709 5.26922C46.903 9.53927 52.4793 16.5705 59.4363 28.1587L61.9308 32.3173C67.9527 42.3494 71.3789 47.5106 73.384 49.9443C75.9629 53.07 77.7688 54.0017 80.1148 54.0017C86.0658 54.0017 87.551 48.5333 87.551 42.2751L96.8 41.9848C96.8 48.5266 95.5105 53.3333 93.3165 57.1308C91.1966 60.8034 87.065 64.4726 80.1148 64.4726C75.7941 64.4726 71.9662 63.5342 67.7333 59.541C64.4793 56.476 60.6751 51.0312 57.7485 46.1367L49.043 31.5949C44.6751 24.297 40.6684 18.8557 38.3494 16.3915C35.8548 13.7418 32.6481 10.5418 27.5308 10.5418C23.389 10.5418 19.8717 13.4481 16.9283 17.8937L8 12.5907Z"
        fill="url(#paint0_linear_1_7)"
      />
      <path
        d="M27.7975 10.5418C23.6557 10.5418 20.1384 13.4481 17.1949 17.8937C13.0329 24.1755 10.4844 33.5325 10.4844 42.5182C10.4844 46.2245 11.2979 49.0701 12.3612 50.7916L3.42277 56.6785C1.12741 52.8608 0 47.8515 0 42.1435C0 31.7637 2.84893 20.9451 8.26666 12.5907C13.0734 5.1814 20.0101 0 27.9662 0L27.7975 10.5418Z"
        fill="url(#paint1_linear_1_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_7"
          x1="13.4713"
          y1="39.4937"
          x2="86.4925"
          y2="43.5249"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E1" />
          <stop offset="0.4" stopColor="#0064E1" />
          <stop offset="0.83" stopColor="#0073EE" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_7"
          x1="15.1899"
          y1="46.9199"
          x2="15.1899"
          y2="22.2785"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0082FB" />
          <stop offset="1" stopColor="#0064E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IconMistralAI({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.13em"
      height="1em"
      viewBox="0 0 512 164"
      className={className}
      {...props}>
      <path d="M216.866 28.297h11.174l4.61 16.671l1.581 6.505h.29l1.562-6.505l4.632-16.671h11.174V75.34h-9.01V60.777l.005-.76c.078-5.566.947-16.24 1.422-21.093h-.217l-3.61 12.627l-3.664 11.332h-5.167l-3.727-11.332l-3.368-12.627h-.25l.115 1.125c.542 5.495 1.312 15.792 1.312 20.728v14.564h-8.864zm44.527 38.116h10.992V37.224h-10.992v-8.928h32.634v8.928H283.04v29.19h10.988v8.927h-32.634zm41.626 3l6.114-7.312c3.558 2.912 7.949 4.91 12.512 4.91c4.52 0 6.608-1.75 6.608-4.05c0-3.387-2.798-4.206-7.251-6.07l-6.132-2.617c-5.215-1.98-9.977-5.978-9.977-12.825c0-7.791 7.022-14.019 17.25-14.019c5.661 0 11.382 2.122 15.631 6.16l-5.366 6.711c-3.316-2.38-6.25-3.675-10.848-3.675c-3.508 0-5.89 1.454-5.89 4.201c0 2.83 3.155 3.867 7.67 5.558l5.758 2.439c6.165 2.31 10.055 6.152 10.055 12.79c0 7.821-6.564 14.592-18.215 14.592c-6.36 0-12.928-2.325-17.919-6.792m56.037-32.189h-14.111v-8.928h38.873v8.928H369.71v38.117h-10.654zm42.681-.478h5.194c5.595 0 8.597 1.562 8.597 6.207c0 4.606-3.002 7.014-8.597 7.014h-5.194zm26.493 38.595l-10.644-18.82c5.025-2.272 8.387-6.655 8.387-13.568c0-11.08-8.042-14.587-17.876-14.656h-17.034V75.34h10.674V58.417h5.592l8.986 16.924zm17.682-19.484l1.114-4.334l3.652-15.172h.289c.808 3.546 1.77 7.37 2.69 10.978l2.174 8.528zm14.89 19.484h11.294l-14.66-47.045h-12.768l-14.66 47.045h10.9l2.873-11.188h14.166zm19.615-47.044h10.632v38.117H512v8.927h-31.583zM229.238 131.327l1.113-4.334l3.652-15.173h.29c.808 3.546 1.77 7.37 2.689 10.979l2.174 8.528zm14.885 19.502h11.299l-14.666-47.064h-12.773l-14.666 47.064h10.904l2.876-11.194h14.17zm17.27-8.946h10.992v-29.19h-10.992v-8.928h32.634v8.928H283.04v29.19h10.988v8.928h-32.634zm42.107 13.61h34.866v8.109H303.5zM122.925 0h30.731v30.731h-30.731z"></path>
      <path fill="#f7d046" d="M138.291 0h30.731v30.731h-30.731z"></path>
      <path d="M0 0h30.731v30.731H0zm0 30.731h30.731v30.731H0zm0 30.732h30.731v30.731H0zm0 30.731h30.731v30.731H0z"></path>
      <path d="M0 122.925h30.731v30.731H0z"></path>
      <path fill="#f7d046" d="M15.366 0h30.731v30.731H15.366z"></path>
      <path
        fill="#f2a73b"
        d="M138.291 30.731h30.731v30.731h-30.731zm-122.925 0h30.731v30.731H15.366z"></path>
      <path d="M92.194 30.731h30.731v30.731H92.194z"></path>
      <path
        fill="#f2a73b"
        d="M107.56 30.731h30.731v30.731H107.56zm-61.463 0h30.731v30.731H46.097z"></path>
      <path
        fill="#ee792f"
        d="M76.828 61.463h30.731v30.731H76.828zm30.732 0h30.731v30.731H107.56zm-61.463 0h30.731v30.731H46.097z"></path>
      <path d="M61.463 92.194h30.731v30.731H61.463z"></path>
      <path fill="#eb5829" d="M76.828 92.194h30.731v30.731H76.828z"></path>
      <path
        fill="#ee792f"
        d="M138.291 61.463h30.731v30.731h-30.731zm-122.925 0h30.731v30.731H15.366z"></path>
      <path d="M122.925 92.194h30.731v30.731h-30.731z"></path>
      <path fill="#eb5829" d="M138.291 92.194h30.731v30.731h-30.731z"></path>
      <path d="M122.925 122.925h30.731v30.731h-30.731z"></path>
      <path fill="#eb5829" d="M15.366 92.194h30.731v30.731H15.366z"></path>
      <path
        fill="#ea3326"
        d="M138.291 122.925h30.731v30.731h-30.731zm-122.925 0h30.731v30.731H15.366z"></path>
    </svg>
  )
}

export function IconOllama({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="646"
      height="854"
      viewBox="0 0 646 854"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M140.629 0.239929C132.66 1.52725 123.097 5.69568 116.354 10.845C95.941 26.3541 80.1253 59.2728 73.4435 100.283C70.9302 115.792 69.2138 137.309 69.2138 153.738C69.2138 173.109 71.4819 197.874 74.7309 214.977C75.4665 218.778 75.8343 222.15 75.5278 222.395C75.2826 222.64 72.2788 225.092 68.9072 227.789C57.3827 236.984 44.2029 251.145 35.1304 264.08C17.7209 288.784 6.44151 316.86 1.72133 347.265C-0.117698 359.28 -0.608106 383.555 0.863118 395.57C4.11207 423.278 12.449 446.695 26.7321 468.151L31.391 475.078L30.0424 477.346C20.4794 493.407 12.3264 516.64 8.52575 538.953C5.522 556.608 5.15419 561.328 5.15419 584.99C5.15419 608.837 5.4607 613.557 8.28054 630.047C11.6521 649.786 18.5178 670.689 26.1804 684.605C28.6938 689.141 34.8239 698.581 35.5595 699.072C35.8047 699.194 35.0691 701.462 33.9044 704.098C25.077 723.408 17.537 749.093 14.4106 770.733C12.2038 785.567 11.8973 790.349 11.8973 805.981C11.8973 825.903 13.0007 835.589 17.1692 851.466L17.7822 853.795H44.019H70.3172L68.6007 850.546C57.9957 830.93 57.0149 794.517 66.1487 758.166C70.3172 741.369 75.0374 729.048 83.8647 712.067L89.1366 701.769V695.455C89.1366 689.57 89.014 688.896 87.1137 685.034C85.6424 682.091 83.6808 679.578 80.1866 676.145C74.2404 670.383 69.9494 664.314 66.5165 656.835C51.4365 624.1 48.494 575.489 59.0991 534.049C63.5128 516.762 70.8076 501.376 78.4702 492.978C83.6808 487.215 86.378 480.779 86.378 474.097C86.378 467.17 83.926 461.469 78.4089 455.523C62.5932 438.604 52.8464 418.006 49.3522 394.038C44.3868 359.893 53.3981 322.683 73.8726 293.198C93.9181 264.263 122.055 245.689 153.503 240.724C160.552 239.559 173.732 239.743 181.088 241.092C189.119 242.502 194.145 242.072 199.295 239.62C205.67 236.617 208.858 232.877 212.597 224.295C215.907 216.633 218.482 212.464 225.409 203.821C233.746 193.461 241.776 186.411 254.649 177.89C269.362 168.266 286.097 161.278 302.771 157.906C308.839 156.68 311.659 156.496 323 156.496C334.341 156.496 337.161 156.68 343.229 157.906C367.688 162.872 391.964 175.5 411.335 193.399C415.503 197.261 425.495 209.644 428.683 214.794C429.909 216.816 432.055 221.108 433.403 224.295C437.142 232.877 440.33 236.617 446.705 239.62C451.671 242.011 456.881 242.502 464.605 241.214C476.804 239.13 486.183 239.314 498.137 241.766C538.841 249.98 574.273 283.512 589.966 328.446C603.636 367.862 599.774 409.118 579.422 440.626C575.989 445.96 572.556 450.251 567.591 455.523C556.863 466.986 556.863 481.208 567.53 492.978C585.062 512.165 596.035 559.367 592.724 600.99C590.518 628.453 583.468 653.035 573.782 666.95C572.066 669.402 568.511 673.57 565.813 676.145C562.319 679.578 560.358 682.091 558.886 685.034C556.986 688.896 556.863 689.57 556.863 695.455V701.769L562.135 712.067C570.963 729.048 575.683 741.369 579.851 758.166C588.863 794.027 588.066 829.704 577.767 849.995C576.909 851.711 576.173 853.305 576.173 853.489C576.173 853.673 587.882 853.795 602.226 853.795H628.218L628.892 851.159C629.26 849.75 629.873 847.604 630.179 846.378C630.854 843.681 632.202 835.712 633.306 828.049C634.348 820.325 634.348 791.881 633.306 783.299C629.383 752.158 622.823 727.454 612.096 704.098C610.931 701.462 610.195 699.194 610.44 699.072C610.747 698.888 612.463 696.436 614.302 693.677C627.666 673.448 635.88 648.008 640.049 614.415C641.152 605.158 641.152 565.374 640.049 556.485C637.106 533.559 633.551 517.988 627.666 502.234C625.214 495.675 618.716 481.821 615.958 477.346L614.609 475.078L619.268 468.151C633.551 446.695 641.888 423.278 645.137 395.57C646.608 383.555 646.118 359.28 644.279 347.265C639.497 316.798 628.279 288.845 610.87 264.08C601.797 251.145 588.617 236.984 577.093 227.789C573.721 225.092 570.717 222.64 570.472 222.395C570.166 222.15 570.534 218.778 571.269 214.977C578.687 176.296 578.441 128.053 570.656 90.3524C563.913 57.4951 551.653 31.3808 535.837 16.3008C523.209 4.28578 510.336 -0.863507 494.888 0.11731C459.456 2.20154 430.89 42.9667 419.61 107.21C417.771 117.57 416.178 129.708 416.178 133.018C416.178 134.305 415.932 135.347 415.626 135.347C415.319 135.347 412.929 134.121 410.354 132.589C383.014 116.405 352.608 107.762 323 107.762C293.392 107.762 262.986 116.405 235.646 132.589C233.071 134.121 230.681 135.347 230.374 135.347C230.068 135.347 229.822 134.305 229.822 133.018C229.822 129.585 228.167 117.08 226.39 107.21C216.152 49.5259 192.674 11.3354 161.472 1.71112C157.181 0.423799 144.982 -0.434382 140.629 0.239929ZM151.051 50.139C159.878 57.1273 169.686 77.1114 175.326 99.4863C176.368 103.532 177.471 108.191 177.778 109.907C178.023 111.563 178.697 115.302 179.249 118.183C181.64 131.179 182.743 145.217 182.866 162.32L182.927 179.178L178.697 185.43L174.468 191.744H164.598C153.074 191.744 141.61 193.216 130.637 196.158C126.714 197.139 122.913 198.12 122.178 198.304C121.013 198.549 120.829 198.181 120.155 193.154C116.538 165.875 116.722 135.654 120.707 110.52C125.12 82.5059 135.419 57.1273 145.472 49.6486C147.863 47.8708 148.292 47.9321 151.051 50.139ZM500.589 49.7098C506.658 54.1848 513.34 66.0772 518.305 81.2798C528.297 111.685 531.117 153.431 525.845 193.154C525.171 198.181 524.987 198.549 523.822 198.304C523.087 198.12 519.286 197.139 515.363 196.158C504.39 193.216 492.926 191.744 481.402 191.744H471.532L467.303 185.43L463.073 179.178L463.134 162.32C463.257 138.535 465.464 119.961 470.735 99.3024C476.314 77.1114 486.183 57.1273 494.949 50.139C497.708 47.9321 498.137 47.8708 500.589 49.7098Z"
        fill="black"
      />
      <path
        d="M313.498 358.237C300.195 359.525 296.579 360.015 290.203 361.303C279.843 363.448 265.989 368.23 256.365 372.95C222.895 389.317 199.846 416.596 192.796 448.166C191.386 454.419 191.202 456.503 191.202 467.047C191.202 477.468 191.386 479.736 192.735 485.682C202.114 526.938 240.12 557.405 289.284 562.983C299.95 564.148 346.049 564.148 356.715 562.983C396.193 558.508 430.154 537.114 445.418 507.076C449.463 499.046 451.425 493.835 453.264 485.682C454.613 479.736 454.797 477.468 454.797 467.047C454.797 456.503 454.613 454.419 453.203 448.166C442.965 402.313 398.461 366.207 343.903 359.341C336.792 358.483 318.157 357.747 313.498 358.237ZM336.424 391.585C354.631 393.547 372.96 400.045 387.672 409.853C395.58 415.125 406.737 426.159 411.518 433.393C417.403 442.342 420.774 451.476 422.307 462.572C422.981 467.66 422.614 471.522 420.774 479.736C417.893 491.996 408.943 504.808 396.867 513.758C391.227 517.865 379.519 523.812 372.347 526.141C358.738 530.493 349.849 531.29 318.095 531.045C297.376 530.861 293.697 530.677 287.751 529.574C267.461 525.773 251.4 517.681 239.753 505.36C230.312 495.429 226.021 486.357 223.692 471.706C222.65 464.901 224.611 453.622 228.596 444.12C233.439 432.534 245.944 418.129 258.327 409.853C272.671 400.29 291.552 393.486 308.9 391.647C315.582 390.911 329.742 390.911 336.424 391.585Z"
        fill="black"
      />
      <path
        d="M299.584 436.336C294.925 438.849 291.676 445.224 292.657 449.944C293.76 455.032 298.235 460.182 305.223 464.412C308.963 466.68 309.208 466.986 309.392 469.254C309.514 470.603 309.024 474.465 308.35 477.898C307.614 481.269 307.062 484.825 307.062 485.806C307.124 488.442 309.576 492.733 312.15 494.817C314.419 496.656 314.848 496.717 321.223 496.901C327.047 497.085 328.273 496.962 330.602 495.859C336.61 492.916 338.142 487.522 335.935 477.162C334.096 468.519 334.464 467.17 339.062 464.534C343.904 461.714 349.054 456.749 350.586 453.377C353.529 446.941 350.831 439.646 344.333 436.274C342.74 435.477 340.778 435.11 337.897 435.11C333.422 435.11 330.541 436.152 325.269 439.523L322.265 441.424L320.365 440.259C312.58 435.661 311.17 435.11 306.449 435.171C303.078 435.171 301.239 435.477 299.584 436.336Z"
        fill="black"
      />
      <path
        d="M150.744 365.165C139.894 368.598 131.802 376.567 127.634 387.908C125.611 393.303 124.63 401.824 125.488 406.421C127.511 417.394 136.522 427.386 146.76 430.145C159.633 433.516 169.257 431.309 177.778 422.85C182.743 418.007 185.441 413.777 188.138 406.911C190.099 402.069 190.222 401.211 190.222 394.345L190.283 386.989L187.709 381.717C183.601 373.38 176.184 367.188 167.602 364.92C162.759 363.694 154.974 363.756 150.744 365.165Z"
        fill="black"
      />
      <path
        d="M478.153 364.982C469.755 367.25 462.276 373.502 458.291 381.717L455.717 386.989L455.778 394.345C455.778 401.211 455.901 402.069 457.862 406.911C460.56 413.777 463.257 418.007 468.222 422.85C476.743 431.309 486.367 433.516 499.241 430.145C506.658 428.183 514.075 421.93 517.631 414.635C520.696 408.444 521.431 403.969 520.451 396.919C518.183 380.797 508.742 369.089 494.704 364.982C490.597 363.756 482.628 363.756 478.153 364.982Z"
        fill="black"
      />
    </svg>
  )
}
