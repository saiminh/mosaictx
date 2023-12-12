This is a [Tina CMS](https://tina.io/) project.
It uses Cloudinary for image hosting.

## Local Development

Install the project's dependencies:

```
npm install
```

Run the project locally:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
CLOUDINARY_CLOUD_NAME=<get this from your cloudinary account>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<get this from your cloudinary account>
CLOUDINARY_API_KEY=<get this from your cloudinary account>
CLOUDINARY_API_SECRET=<get this from your cloudinary account>
```

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting starter guide](https://tina.io/guides/tina-cloud/starter/overview/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!
