import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBook, faCode, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faBitbucket, faGithubSquare, faXingSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faBook,
  faCode,
  faEnvelope,
  faTwitterSquare,
  faBitbucket,
  faGithubSquare,
  faXingSquare,
  faLinkedin,
  faAngleRight
);

dom.watch();
