import { redirect } from '@remix-run/node';

export function loader({params}) {
    if (params['*'] === 'exp') {
        return redirect('/expenses');
    }
    // console.log(params);
    return new Response('Not Found', { status: 404 });
}