import { Router } from 'express';

import create from '@modules/users/infra/http/routes/create';
import authenticate from '@modules/users/infra/http/routes/authenticate';
import follow from '@modules/users/infra/http/routes/follow';
import unfollow from '@modules/users/infra/http/routes/unfollow';
import info from '@modules/users/infra/http/routes/info';
import search from '@modules/users/infra/http/routes/search';
import change from '@modules/users/infra/http/routes/change-info';
import picture from '@modules/users/infra/http/routes/change-profile-picture';

const routes = Router();

routes.use(create);
routes.use(authenticate);
routes.use(follow);
routes.use(unfollow);
routes.use(info);
routes.use(search);
routes.use(change);
routes.use(picture);

export default routes;
