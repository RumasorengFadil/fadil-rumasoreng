import React, { memo, ReactNode } from "react";

interface FooterProps {
  content: ReactNode;
  copyright: ReactNode;
}

interface ApplicationLayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode | FooterProps;
  contentClassName?: string;
  footerClassName?: string;
  headerClassName?: string;
}

const ApplicationLayout: React.FC<ApplicationLayoutProps> = memo(function ApplicationLayout({
  header,
  content,
  footer,
  contentClassName = "",
  footerClassName = "",
  headerClassName,
}) {
  return (
    <>
      <div className="w-full lg:h-screen bg-mint-500 font-inter flex flex-col lg:flex-row">
        {header && (
          <header className={`flex bg-secondary flex-col lg:w-max lg:space-y-5 px-6 lg:px-20 py-10 lg:overflow-hidden ${headerClassName}`}>
            {header}
          </header>
        )}

        {content && (
          <main className={`flex flex-col h-full flex-1 bg-primary space-y-16 px-6 lg:px-20 lg:space-y-8 lg:overflow-y-auto scroll-smooth ${contentClassName}`}>
            {content}
          </main>
        )}

        {footer && (
          <footer className={`flex flex-col space-y-8 py-10 bg-tertiary px-10 ${footerClassName}`}>
            {typeof footer === "object" && "content" in footer && "copyright" in footer ? (
              <>
                <div className="flex flex-col overflow-hidden space-y-8 text-black sm:space-x-4 sm:space-y-0 sm:flex-row">
                  {footer.content}
                </div>
                <div>{footer.copyright}</div>
              </>
            ) : (
              <>{footer}</>
            )}
          </footer>
        )}
      </div>
    </>
  );
});

export default ApplicationLayout;
