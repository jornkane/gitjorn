import Navbar from "../Navbar";
import Footer from "../footer";
import PythonRunner from "../PythonRunner";
import type { CourseData, CourseContent } from "../../types/CourseData";

interface CourseTemplateProps {
  courseData: CourseData;
}

const CourseTemplate: React.FC<CourseTemplateProps> = ({ courseData }) => {
  const { metadata, sections } = courseData;

  const renderContent = (content: CourseContent, index: number) => {
    switch (content.type) {
      case "heading":
        const headingClasses = {
          2: "text-3xl font-bold mb-4 mt-6",
          3: "text-2xl font-semibold mb-3 mt-4",
          4: "text-xl font-semibold mb-2 mt-3",
        };
        if (content.level === 2) {
          return (
            <h2 key={index} className={headingClasses[2]}>
              {content.text}
            </h2>
          );
        } else if (content.level === 3) {
          return (
            <h3 key={index} className={headingClasses[3]}>
              {content.text}
            </h3>
          );
        } else {
          return (
            <h4 key={index} className={headingClasses[4]}>
              {content.text}
            </h4>
          );
        }

      case "text":
        return (
          <p key={index} className="mb-4">
            {content.content}
          </p>
        );

      case "list":
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {content.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "code":
        return (
          <pre
            key={index}
            className="bg-gray-900/80 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto text-sm backdrop-blur-sm shadow-xl"
          >
            <code>{content.code}</code>
          </pre>
        );

      case "image":
        return (
          <div key={index} className="mb-4">
            <img
              src={content.src}
              alt={content.alt}
              className="rounded-lg shadow-lg"
              style={{ width: content.width || "auto" }}
            />
            {content.caption && (
              <p className="text-sm mt-2 text-gray-300">{content.caption}</p>
            )}
          </div>
        );

      case "video":
        const getYouTubeEmbedUrl = (url: string) => {
          const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          return match && match[2].length === 11 ? match[2] : null;
        };

        const youtubeId = getYouTubeEmbedUrl(content.url);

        if (youtubeId) {
          return (
            <div key={index} className="mb-4">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={content.caption || "YouTube video player"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
              {content.caption && (
                <p className="text-sm mt-2 text-gray-300">{content.caption}</p>
              )}
            </div>
          );
        }

        return (
          <div key={index} className="mb-4">
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content.thumbnail && (
                <img
                  src={content.thumbnail}
                  alt={content.caption || "Video"}
                  className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                />
              )}
              {content.caption && (
                <p className="text-blue-300 hover:text-blue-100 underline mt-2">
                  {content.caption}
                </p>
              )}
              {/* Fallback text if no thumbnail */}
              {!content.thumbnail && (
                <div className="p-4 bg-gray-800 rounded-lg text-blue-300 underline">
                  Watch Video: {content.caption || content.url}
                </div>
              )}
            </a>
          </div>
        );

      case "iframe":
        return (
          <div key={index} className="mb-4">
            <iframe
              src={content.src}
              className="rounded-lg shadow-lg"
              style={{
                width: content.width || "100%",
                height: content.height || "400px",
                border: 0,
              }}
            />
            {content.caption && (
              <p className="text-sm mt-2 text-gray-300">{content.caption}</p>
            )}
          </div>
        );

      case "link":
        return (
          <p key={index} className="mb-2">
            <a
              href={content.url}
              target={content.external ? "_blank" : undefined}
              rel={content.external ? "noopener noreferrer" : undefined}
              className="text-blue-300 hover:text-blue-100 underline"
            >
              {content.text}
            </a>
          </p>
        );

      case "popup":
        // For now, just render as text with the trigger
        return (
          <p key={index} className="mb-4">
            {content.trigger}: {content.content}
          </p>
        );

      case "python-runner":
        return (
          <div key={index} className="mb-6">
            <PythonRunner
              initialCode={content.initialCode}
              title={content.title}
              defaultLibraries={content.defaultLibraries}
            />
          </div>
        );

      case "alert":
        const alertStyles = {
          info: "bg-blue-900/30 border-blue-500 text-blue-200",
          warning: "bg-yellow-900/30 border-yellow-500 text-yellow-200",
          tip: "bg-green-900/30 border-green-500 text-green-200",
          danger: "bg-red-900/30 border-red-500 text-red-200",
        };
        const defaultStyle = "bg-gray-800 border-gray-500";
        return (
          <div
            key={index}
            className={`border-l-4 p-4 mb-4 rounded-r-lg ${
              alertStyles[content.variant] || defaultStyle
            } backdrop-blur-sm shadow-md`}
          >
            {content.title && <p className="font-bold mb-1">{content.title}</p>}
            <div className="text-sm opacity-90 whitespace-pre-line">
              {content.content}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="p-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{metadata.title}</h1>
          <p className="text-xl text-gray-300 mb-4">{metadata.description}</p>
        </header>

        {metadata.image && (
          <div className="mb-8">
            <img
              src={metadata.image}
              alt={metadata.imageAlt || metadata.title}
              className="w-2/5 rounded-lg shadow-lg"
            />
            {metadata.imageSource && (
              <p className="text-sm mt-2">
                Bildekilde:{" "}
                {metadata.imageSourceUrl ? (
                  <a
                    href={metadata.imageSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-100 underline"
                  >
                    {metadata.imageSource}
                  </a>
                ) : (
                  metadata.imageSource
                )}
              </p>
            )}
          </div>
        )}

        {sections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl"
          >
            {section.title && (
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            )}
            <div>
              {section.content.map((content, contentIndex) =>
                renderContent(content, contentIndex)
              )}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CourseTemplate;
