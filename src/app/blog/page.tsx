import GradientTitle from '@/app/components/GradientTitle'

export default function Posts() {
  return (
    <div className="flex-1">
      <div>
        <GradientTitle className="from-sky-500 to-purple mb-2">
          Build & Share
        </GradientTitle>

        <p>
          <strong>Writing</strong> gives us a curious power to{' '}
          <strong>think</strong> more clearly.
        </p>

        {/* <p>
        <strong>Escrever</strong> nos dá um poder curioso de{' '}
        <strong>pensar</strong> com maior clareza.
      </p> */}
      </div>

      <div className="mt-10">
        <h2 className="text-xl text-secondary font-normal font-body">
          <i>There are no posts yet :(</i>
        </h2>
      </div>
    </div>
  )
}
