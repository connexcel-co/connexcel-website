export default function BackgroundOrbs() {

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full animate-pulse"></div>

    </div>
  )

}